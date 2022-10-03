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
    [Route("/api")]
    public class MenuController : Controller
    {
        ApplicationDbContext db;
        public MenuController(ApplicationDbContext db)
        {
            this.db = db;
        }
        
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetList(string id)
        {
            var Menu = await db.Menu.Select(u => 
            new {
                u.idMenu,
                u.nameMenu,
                u.type,
                u.linkMenu
            }).Where(u=>u.type == $"{id}").ToListAsync();
            return Ok(Menu);
        }

        [HttpGet("header")]
        [AllowAnonymous]
        public async Task<IActionResult> GetListAll(string id)
        {
            var Menu = await db.Menu.ToListAsync();
            return Ok(Menu);
        }
        
        // [HttpGet("menu/idMenu")]
        // [AllowAnonymous]
        // public async Task<IActionResult> GetIdMenu(int idMenu){
        //     var menuId = await db.Menu.FindAsync(idMenu);
        //      if(menuId == null){
        //         return NotFound();
        //     }
        //     return Ok(menuId) ;

        // }
        [HttpDelete("idMenu")]
        [AllowAnonymous]
        public async Task<IActionResult> DeleteList(int idMenu)
        {
            var Menu = await db.Menu.FindAsync(idMenu);
            if(Menu == null){
                return NotFound();
            }
            db.Menu.Remove(Menu);
            await db.SaveChangesAsync();
            return NoContent();
        }
    }
}   