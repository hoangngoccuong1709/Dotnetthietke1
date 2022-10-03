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
    [Route("api/v1/[controller]")]
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
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetListById(int id)
        {
            var Conten = await db.Conten.FindAsync(id);
            if (id == null)
            {
                return NotFound();
            }
            return Ok(Conten);
        }

        [HttpPost]
        [AllowAnonymous]

        public async Task<ActionResult<Conten>> CreateProduct(Conten content)
        {
            var conten = new Conten
            {
                NameConten = content.NameConten,
                Idconten = content.Idconten,
                Title = content.Title,
                Paragraph = content.Paragraph
            };
            db.Conten.Add(content);
            await db.SaveChangesAsync();

            return Ok(conten);
        }
    }
}