using dotnetthietke1.Models;
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

        // get all data 
        [HttpGet]
        public async Task<IActionResult> getMenu()
        {
            var menu = await db.Menu.ToListAsync();
            return Ok(menu);
        }

        //add data 
        [HttpPost]
        public async Task<ActionResult<Menu>> CreateMenu([FromBody] Menu menu)
        {
            var newmenu = new Menu
            {
                nameMenu = menu.nameMenu,
                linkto = menu.linkto,
                type = menu.type
            };
            db.Menu.AddAsync(newmenu);
            await db.SaveChangesAsync();
            return Ok(menu);

        }



        //get data by type
        [HttpGet("{id}")]
        public async Task<IActionResult> getMenuForType(string id)
        {

            var Menu = await db.Menu.Select(u =>
            new
            {
                u.id,
                u.nameMenu,
                u.linkto,
                u.type
            }).Where(u => u.type == $"{id}").ToListAsync();
            return Ok(Menu);
        }



        //delete data by id
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

        //edit menu by id
        [HttpPut("{id}")]
        public async Task<IActionResult> editMenu(int id, [FromBody] Menu menu)
        {
            var Menu = await db.Menu.FindAsync(id);
            if (Menu == null)
            {
                return NotFound();
            }
            Menu.nameMenu = menu.nameMenu;
            Menu.linkto = menu.linkto;
            Menu.type = menu.type;

            await db.SaveChangesAsync();
            return NoContent();
        }


    }
}