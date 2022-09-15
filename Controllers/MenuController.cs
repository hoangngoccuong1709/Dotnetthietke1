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
    }
}