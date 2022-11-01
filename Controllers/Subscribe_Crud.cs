using dotnetthietke1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnetthietke1.Controller
{
    [Route("api/[controller]")]
    public class SubscribeController : ControllerBase
    {
        ApplicationDbContext db;
        public SubscribeController(ApplicationDbContext db)
        {
            this.db = db;
        }

        // get all data 
        [HttpGet]
        public async Task<IActionResult> getAllInfo()
        {
            var info = await db.Subscribe.ToListAsync();
            return Ok(info);
        }

        // add data
        [HttpPost]
        public async Task<ActionResult<Subscribe>> CreateSubscribe([FromBody] Subscribe info)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("lỗi");
            };

            await db.Subscribe.AddAsync(info);
            await db.SaveChangesAsync();
            return Ok(info);

        }
        [HttpGet("{id}")]
        public async Task<IActionResult> getInforById(int id)
        {

            var check = await db.Subscribe.FindAsync(id);
            return Ok(check);
        }


        [HttpDelete("{id}")]

        public async Task<IActionResult> deleteSubscribe(int id)
        {
            var check = await db.Subscribe.FindAsync(id);
            if (check != null)
            {
                db.Subscribe.Remove(check);
                await db.SaveChangesAsync();
                return Ok(new { success = true });
            }
            return NotFound();
        }

        //edit subscribe by id
        [HttpPut("{id}")]
        public async Task<IActionResult> updateSubscribe(int id, [FromBody] Subscribe subscribe)
        {
            var sub = db.Subscribe.Find(id);
            if (!ModelState.IsValid)
            {
                return BadRequest("k có subscribe");
            }
            sub.name = subscribe.name;
            sub.email = subscribe.email;
            sub.message = subscribe.message;
            sub.updateAt = subscribe.updateAt;
            await db.SaveChangesAsync();
            return Ok(1);
        }
    }
}