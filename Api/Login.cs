// using System;
// using System.Collections.Generic;
// using System.Linq;
// using Microsoft.AspNetCore.Mvc;
// using System.Reflection;
// using System.ComponentModel.DataAnnotations;
// using Microsoft.AspNetCore.Authorization;
// using Microsoft.EntityFrameworkCore;

// namespace dotnetthietke1.Api
// {
//     [ApiController]
//     [Produces("application/json")]
//     [Route("api")]
//     public class LoginController : ControllerBase
//     {
//         public static Models.Users users = new Models.Users();
//         ApplicationDbContext db;
//         public LoginController(ApplicationDbContext db)
//         {
//             this.db = db;
//         }

//         [HttpGet]
//         [AllowAnonymous]
//         public async Task<IActionResult> GetList()
//         {
//             var list = await db.Users.ToListAsync();

//             return Ok(list);

//         }
//         [HttpPost]
//         //[Route("/login")]
//         public async Task<IActionResult> GetInfo(string username)
//         {
//              var userName = users.NameUser;
//             //var user = await userManager.FindByNameAsync(userName);
//             var user2 = await db.Users.Select(u => new
//             {
// 				 u.NameUser,
//                  u.Password,
//                  u.Date,
//                 // u.Email,
//                 // u.PhoneNumber
//             }).Where(u => u.NameUser == username)
//             .FirstOrDefaultAsync();
//             if(user2 ==null){
//                 return BadRequest("Tài khoản mật khẩu không đúng");
//             }
//             return BadRequest("Đăng nhập thành công");;
//         }
//         //   [HttpPost]
//         //[Route("/login")]
//         //  public async Task<IActionResult> LoginUser([FromBody] LoginModel users)
//         // // public async Task<ActionResult<string>> userRegisteration(Models.Users request)
//         // {
//         //     //var user = await userManager.FindByNameAsync(userName);
//         //   if (!string.IsNullOrEmpty(users.NameUser))
//         //     {
//         //         try
//         //         {
//         //             var user= db.Users.Where(x => x.NameUser == users.NameUser).FirstOrDefault();
//         //             if (user != null)
//         //             {
//         //                 return Ok(BadRequest("Tài khoản mật khẩu không đúng"));
//         //             }
//         //             return Ok(BadRequest("Tài khoản mật khẩu đúng"));
//         //         }
//         //         catch (Exception ex)
//         //         {
//         //             return Ok();
//         //         }
//         //     }
//         //     return Ok(BadRequest("chào mừng"));
//         // }
//     }
// }