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
    public class ProductController : ControllerBase
    {
        ApplicationDbContext db;
        private readonly ApplicationDbContext _applicationDbContetext;
        public ProductController(ApplicationDbContext applicationdDbContext)
        {
            _applicationDbContetext = applicationdDbContext;
            this.db = applicationdDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var cakes = await _applicationDbContetext.Product.ToListAsync();
            return Ok(cakes);
        }
        [HttpGet]
        [Route("get-product-by-id")]
        public async Task<IActionResult> GetProductByIdAsync(int id)
        {
            var cake = await _applicationDbContetext.Product.FindAsync(id);
            return Ok(cake);
        }
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] ModelProduct product)
        {
            if (!ModelState.IsValid) return BadRequest("lỗi");
            var user2 = new Product()
            {
                // Id = user.Id,
                NameProduct = product.nameProduct,
                Image = product.image,
                Price = product.price,
                Title = product.title
            };
            _applicationDbContetext.Product.Add(user2);
            await _applicationDbContetext.SaveChangesAsync();
            //return Created($"/get-product-by-id?id={product.Idproduct}", product);
            return Ok(product);
        }
        [HttpPut]
        public async Task<IActionResult> PutAsync(Product contenToUpdate)
        {
            _applicationDbContetext.Product.Update(contenToUpdate);
            await _applicationDbContetext.SaveChangesAsync();
            return NoContent();
        }
        [Route("{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var contenToDelete = await _applicationDbContetext.Product.FindAsync(id);
            if (contenToDelete == null)
            {
                return NotFound();
            }
            _applicationDbContetext.Product.Remove(contenToDelete);
            await _applicationDbContetext.SaveChangesAsync();
            return NoContent();
        }
        [HttpGet]
        [Route("idproduct")]
        public async Task<IActionResult> GetInfo(string nameProduct)
        {
            //var user = await userManager.FindByNameAsync(userName);
            var user2 = await db.Product.Select(u => new
            {
                u.Idproduct,
                u.NameProduct,
                u.Title,
                u.Image,
                u.Price
            }).Where(u => u.NameProduct == nameProduct)
            .FirstOrDefaultAsync();
            return Ok(user2);
        }
    }
    public class ModelProduct
    {
        public string nameProduct { get; set; }
        public string image { get; set; }
        public float price { get; set; }
        public string title { get; set; }
    }
}