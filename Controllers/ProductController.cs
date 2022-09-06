using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnetthietke1.Controllers
{
    [Route("/api/Products")]
     public class ProductController : ControllerBase{
         ApplicationDbContext db;
         public ProductController(ApplicationDbContext db){
             this.db=db;
         }
         public async Task<IActionResult> GetList(){
             var list = await db.Products.ToListAsync();
             //return BadRequest(list);
             return Ok(list);
         }
     }
}