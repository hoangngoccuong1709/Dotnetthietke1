using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnetthietke1.Controller
{
    [Route("[controller]")]
    public class MenuController : ControllerBase
    {
        ApplicationDbContext db;
        public MenuController(ApplicationDbContext db)
        {
            this.db = db;
        }

        // get data header and footer by type
        [HttpGet]
        public async Task<IActionResult> getMenu()
        {
            var menu = await db.Menu.ToListAsync();
            return Ok(menu);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> getMenuForType(string id)
        {

            var Menu = await db.Menu.Select(u =>
            new
            {
                u.id,
                u.nameMenu,
                u.type,
                u.linkto
            }).Where(u => u.type == $"{id}").ToListAsync();
            return Ok(Menu);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteMenu(int id)
        {
            var Menu = await db.Menu.FindAsync(id);
            if (Menu != null)
            {
                db.Menu.Remove(Menu);
                await db.SaveChangesAsync();
                return Ok(new { success = true });
            }
            return NotFound();
        }
        // [HttpPost]
        // public async Task<IActionResult> postDbMenu(){

        // }
    }
}