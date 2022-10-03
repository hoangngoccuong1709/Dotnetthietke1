using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

namespace dotnetthietke1
{
    //url api/product
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        ApplicationDbContext _context;
        public ProductController(ApplicationDbContext _context)
        {
            this._context = _context;
        }
        //lay tat ca san pham
        [HttpGet]
        public async Task<IActionResult> GetListAll(int id)
        {
            var List = await _context.Products.ToListAsync();
            return Ok(List);
        }
        //lay sp theo id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetList(int id)
        {
            var Products = await _context.Products.FindAsync(id);
            if (Products == null)
            {
                return NotFound();
            }
            return Ok(Products);

        }
        //them sp
        [HttpPost]
        public async Task<ActionResult<Products>> CreateProduct( Products products ){
            var product = new Products
            {
                Image = products.Image,
                Idproduct = products.Idproduct,
                Title = products.Title,
                NameProduct = products.NameProduct
            };

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return Ok(products);

        }

        //edit san pham
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, Products products){
            if (id != products.Idproduct){
                return BadRequest();
                
            }
            var product = await _context.Products.FindAsync(id);
            if (product == null){
                return NotFound();
            }
            
            product.Idproduct = products.Idproduct;
            product.NameProduct = products.NameProduct;
            product.Image = products.Image;
            product.Title = products.Title;

            await _context.SaveChangesAsync();
            return NoContent(); 
        }

        //delete san pham
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id){
            var product = await _context.Products.FindAsync(id);
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        

    }
}