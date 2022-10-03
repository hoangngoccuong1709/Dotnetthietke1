using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using dotnetthietke1.Models;
using Microsoft.AspNetCore.Identity;

namespace dotnetthietke1.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        ApplicationDbContext db;
        private readonly ApplicationDbContext _applicationDbContetext;
        public OrderController(ApplicationDbContext applicationdDbContext)
        {
            _applicationDbContetext = applicationdDbContext;
            this.db = applicationdDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var query =
            from p in db.Product
            join o in db.Orders on p.Idproduct equals o.Idproduct
            join c in db.Users on o.UserId equals c.Id
            select new
            {
                UserName = c.UserName,
                ProductName = p.NameProduct,
                Id = o.Id,
                Total = o.Total,
                Date = o.Date
            };

            foreach (var ownerAndPet in query)
            {
                Console.WriteLine($"\"{ownerAndPet.ProductName}\" is owned by {ownerAndPet.Total}");
            }
            return Ok(query);
        }

        // [HttpPost]
        // public async Task<IActionResult> Postdata([FromBody] BodyOrder  order)
        // {
        //     var query =
        //     from p in db.Orders
        //     join o in db.Product on p.Idproduct equals o.Idproduct
        //     join c in db.Users on p.UserId equals c.Id
        //     select new
        //     {
        //         UserName = c.UserName,
        //         ProductName = o.NameProduct,
        //         Id = p.Id,
        //         Total = p.Total,
        //         Date = p.Date
        //     };
        //     await _applicationDbContetext.Orders.AddAsync(order);
        //     await _applicationDbContetext.SaveChangesAsync();
        //     foreach (var ownerAndPet in query)
        //     {
        //         Console.WriteLine($"\"{ownerAndPet.ProductName}\" is owned by {ownerAndPet.Total}");
        //     }
        //     return Ok(query);
        // }
        
        [HttpGet]
        [Route("idorder")]
        public async Task<IActionResult> GetInfo(string id)
        {
            //var user = await userManager.FindByNameAsync(userName);
            var user2 = await db.Orders.Select(u => new
            {
                u.Id,
                //u.Idproduct,
                u.Total,
                u.Date,
                // u.Email,
                // u.PhoneNumber
            }).Where(u => u.Id == id)
            .FirstOrDefaultAsync();
            return Ok(user2);
        }
        [HttpGet]
        [Route("getorders")]
        public async Task<IActionResult> GetOrders()
        {
            var orders = _applicationDbContetext.Orders.ToList();
            return Ok(orders);
        }
        [HttpGet]
        [Route("test")]
        public async Task<IActionResult> Test()
        {
            var orders = _applicationDbContetext.Users.ToList();
            return Ok(orders);
        }


        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] BodyOrder body)
        {
            if (!ModelState.IsValid) return BadRequest("lỗi");
            
            var order = new Orders()
            {
               
                Id = body.OrderId, 
                Date = DateTime.UtcNow,
                Quantity = body.Quantity,
                Total = body.Total,
                Idproduct = body.Idproduct,
                UserId = body.UserId
            };
            await _applicationDbContetext.Orders.AddAsync(order);
            await _applicationDbContetext.SaveChangesAsync();
            return Ok(body);
        }
        //     [HttpGet]
        // public async Task<IActionResult> GetAsync()
        // {
        // 	var cakes = await _applicationDbContetext.Product.ToListAsync();
        // 	return Ok(cakes);
        // }
        [HttpPut]
        public async Task<IActionResult> PutAsync([FromBody] BodyOrder model)
        {
            var found = _applicationDbContetext.Orders.FirstOrDefault(o => o.Id == model.OrderId);
            if (found != null)
            {
                found.Idproduct = model.Idproduct;
                // sửa thì k phải sua id mo 
                // found ni là mình lấy từ db ra nên gán hấn cho cấy mình truyền từ client
                found.Quantity = model.Quantity;
                found.Total = model.Total;
                found.UserId = model.UserId;
                await _applicationDbContetext.SaveChangesAsync();
            }

            return Ok(found);
        }
        public class BodyOrder
        {
            public string OrderId { get; set; }
            public string UserId { get; set; }
            public int Quantity { get; set; }
            public float Total { get; set; }
            public int Idproduct { get; set; }
        }

    }
}