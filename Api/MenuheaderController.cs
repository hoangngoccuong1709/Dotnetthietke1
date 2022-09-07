using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

namespace dotnetthietke1.Api
{
    [Produces("application/json")]
    [Route("api/Menuheader")]
    public class MenuheaderController : Controller
    {
        ApplicationDbContext db;
        public MenuheaderController(ApplicationDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetList()
        {
            var list = await db.Products.ToListAsync();

            return Ok(list);

        }
    }
}