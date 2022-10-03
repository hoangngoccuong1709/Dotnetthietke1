using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using dotnetthietke1.Models;
using Microsoft.AspNetCore.Identity;

namespace dotnetthietke1.Controller
{
    [ApiController]
    [Route("api/[controller]")]
public class ContenController: ControllerBase
{
	ApplicationDbContext db;
    private readonly ApplicationDbContext _applicationDbContetext;
    public ContenController(ApplicationDbContext applicationdDbContext)
    {
        _applicationDbContetext = applicationdDbContext;
		 this.db = applicationdDbContext;
    }
	
    [HttpGet]
public async Task<IActionResult> GetAsync()
{
	var cakes = await _applicationDbContetext.Contens.ToListAsync();
	return Ok(cakes);
}
 [HttpGet]
 [Route("get-conten-by-id")]
public async Task<IActionResult> GetCakeByIdAsync(int id)
{
	var cake = await _applicationDbContetext.Contens.FindAsync(id);
	return Ok(cake);
}
[HttpPost]
[Route("by-id")]
public async Task<IActionResult> PostAsync(Contens conten)
{
	_applicationDbContetext.Contens.Add(conten);
	await _applicationDbContetext.SaveChangesAsync();
	return Created($"/get-conten-by-id?id={conten.Idconten}", conten);
}
[HttpPut]
public async Task<IActionResult> PutAsync(Contens contenToUpdate)
{
	_applicationDbContetext.Contens.Update(contenToUpdate);
	await _applicationDbContetext.SaveChangesAsync();
	return NoContent();
}
[Route("{id}")]
[HttpDelete]
public async Task<IActionResult> DeleteAsync(int id)
{
	var contenToDelete = await _applicationDbContetext.Contens.FindAsync(id);
	if (contenToDelete == null)
	{
		return NotFound();
	}
	_applicationDbContetext.Contens.Remove(contenToDelete);
	await _applicationDbContetext.SaveChangesAsync();
	return NoContent();
}
}
}