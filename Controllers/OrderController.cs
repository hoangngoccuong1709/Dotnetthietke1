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
            var query = db.Orders.AsNoTracking();
            var data = await query.Select(s => new
            {
                Id = s.Id,
                date = s.Date,
                quantity = s.Quantity,
                total = s.Total,
                fullname = s.User.FullName,
                phonenumber = s.User.PhoneNumber,
                adress = s.User.Description,
                Product = s.OrderDetails.Select(o => new
                {
                    // Id = o.Product.Idproduct,
                    o.Product.NameProduct
                }),
            }).ToListAsync();
            var total = data.Count();
            //foreach (var ownerAndPet in query)
            //{
            // Console.WriteLine($"\"{ownerAndPet.ProductName}\" is owned by {ownerAndPet.Total}");
            //}
            return Ok(data);
            // {
            //     total = total,
            //     items = data
            // });
        }
        [HttpGet]
        [Route("idorder")]
        public async Task<IActionResult> GetInfo(int id)
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
                Date = DateTime.UtcNow,
                Quantity = body.Quantity,
                Total = body.Total,
                UserId = body.UserId,
                // OrderDetails =OrderDetailNews,

            };
            var OrderDetailNews = new List<OrderDetail>();
            OrderDetailNews.Add(new OrderDetail
            {
                ProductId = body.Idproduct,
                Quantity = body.Quantity,
                Price = body.Price,
                UserId = body.UserId,
                // OrderId = body.Id,
                //dươuowis ni em điền giá với chi nha
                //lưu 2 file cấy e
            });
            order.OrderDetails = OrderDetailNews;
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
        // [HttpPut]
        // public async Task<IActionResult> PutAsync([FromBody] BodyOrder model)
        // {
        //     var found = _applicationDbContetext.Orders.FirstOrDefault(o => o.Id == model.OrderId);
        //     if (found != null)
        //     {
        //         found.Idproduct = model.Idproduct;
        //         // sửa thì k phải sua id mo 
        //         // found ni là mình lấy từ db ra nên gán hấn cho cấy mình truyền từ client
        //         found.Quantity = model.Quantity;
        //         found.Total = model.Total;
        //         found.UserId = model.UserId;
        //         await _applicationDbContetext.SaveChangesAsync();
        //     }

        //     return Ok(found);
        // }
        public class BodyOrder
        {
            public int Id { get; set; }

            public string UserId { get; set; }
            public int Quantity { get; set; }
            public float Total { get; set; }
            public float Price { get; set; }
            public int Idproduct { get; set; }
        }

    }
}