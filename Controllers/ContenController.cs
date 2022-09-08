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
    [Route("api/Conten")]
    public class ContenController : Controller
    {
        ApplicationDbContext db;
        public ContenController(ApplicationDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetList()
        {
            var Conten = await db.Conten.ToListAsync();

            return Ok(Conten);

        }
    }
}