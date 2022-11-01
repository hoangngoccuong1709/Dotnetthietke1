using System;
using System.Collections.Generic;
using System.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using dotnetthietke1;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace dotnetthietke1.Controllers
{
    [Route("/user")]
    public class UserController : ControllerBase
    {
        ApplicationDbContext db;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly RoleManager<IdentityRole> roleManager;
        IConfiguration configuration;

        public UserController(ApplicationDbContext dbContext, UserManager<User> userManager, SignInManager<User> signInManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            this.db = dbContext;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.signInManager = signInManager;
            this.configuration = configuration;
        }
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] RegisterViewModel user)
        {
            if (!ModelState.IsValid) return BadRequest("lỗi");
            var user2 = new User()
            {
                // Id = user.Id,
                FullName = user.FullName,

                PhoneNumber = user.Phonenumber,
                UserName = user.UserName,
                PasswordHash = user.Password,
                Description = user.Description
                // u.PhoneNumber
            };
            await db.Users.AddAsync(user2);
            await db.SaveChangesAsync();
            return Ok(user);
        }
        [HttpPost("login")]
        public async Task<IActionResult> LoginUser([FromBody] LoginModel model)
        {
            var user = await userManager.FindByNameAsync(model.UserName);
            string error = null;
            if (user != null)
            {
                if (!await signInManager.CanSignInAsync(user))
                {
                    error = "Không được phép đăng nhập";
                }
                else if (userManager.SupportsUserLockout && await userManager.IsLockedOutAsync(user))
                {
                    error = "Tài khoản đang bị khóa";
                }
                else
                {
                    if (await userManager.CheckPasswordAsync(user, model.Password))
                    {
                        if (userManager.SupportsUserLockout)
                        {
                            await userManager.ResetAccessFailedCountAsync(user);
                        }
                    }
                    else
                    {
                        await userManager.AccessFailedAsync(user);
                        error = "Tài khoản hoặc mật khẩu không đúng";
                    }
                }
            }
            else
            {
                error = "Tài khoản hoặc mật khẩu không đúng";
            }

            if (error != null)
            {
                return BadRequest(new
                {
                    Error = "Đăng nhập thất bại",
                    Message = error
                });
            }

            var now = DateTime.UtcNow;
            var userId = user.Id;
            var expires = model.Remember ? now.Add(TimeSpan.FromDays(10)) : now.Add(TimeSpan.FromDays(1));

            var claims = new List<Claim>{
                new Claim(ClaimTypes.NameIdentifier,  userId.ToString()),
                new Claim(ClaimTypes.Name,  user.UserName),
                new Claim("AspNet.Identity.SecurityStamp",  user.SecurityStamp)
            };
            var securityKey = configuration.GetValue<string>("SecurityKey");
            // var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Program.securityKey));
            // var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(securityKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            // Create the JWT and write it to a string
            var jwt = new JwtSecurityToken(
                issuer: "RS",
                audience: "RS",
                claims: claims,
                notBefore: now,
                expires: expires,
                signingCredentials: creds
            );

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            return Ok(new
            {
                AccessToken = encodedJwt,
                ExpiresIn = expires,
                User = new
                {
                    user.Id,
                    user.UserName,
                    user.Email,
                    user.PhoneNumber
                }// đoạn ăng nhập ni trả về ừng trả về thông tin user
                 // thông tin user chạy 1 api riêng


            }
            );
        }

        [HttpGet("info")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetInfo()
        {
            var userName = User.Identity?.Name;
            //var user = await userManager.FindByNameAsync(userName);

            var user2 = await db.Users.Select(u => new
            {
                u.Id,
                u.FullName,
                u.Description,
                u.Avatar,
                u.UserName,
                u.Email,
                u.PhoneNumber
            }).Where(u => u.UserName == userName)
            .FirstOrDefaultAsync();



            // var user = User.Claims.Where(c => c.Type == "AspNet.Identity.SecurityStamp")
            //             .Select(c => c.Value).FirstOrDefault();
            // var userName = User.Identity.Name;
            //var user = await userManager.Users.Where(u => u.UserName == model.UserName).FirstOrDefaultAsync();


            return Ok(user2);
        }

        [HttpGet("Register")]
        public async Task<IActionResult> CreateUser(string username, string password, string avatar, string description, string fullName)
        {
            var result = await userManager.CreateAsync(new User
            {
                UserName = username,
                Email = username + "@gmail.com",
                Avatar = avatar,
                Description = description,
                FullName = fullName
            }, password);

            if (result.Succeeded)
            {
                return Ok("Tạo tài khoản thành công");
            }
            return BadRequest(result.Errors);
        }
        //     [HttpGet("Register")]
        //     public async Task<IActionResult> CreateUser(string username, string password, string phonenumber, string description, string fullName)
        //     {
        //         var result = await userManager.CreateAsync(new User
        //         {
        //             UserName = username,
        //             FullName = fullName,
        //             // Email = username + "@gmail.com",
        //             PhoneNumber = phonenumber,
        //             Description = description

        //         }, password);

        //         if (result.Succeeded)
        //         {
        //             return Ok("Tạo tài khoản thành công");
        //         }
        //         return BadRequest(result.Errors);
        //     }
    }
    public class LoginModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool Remember { get; set; }
    }
    public class RegisterViewModel
    {
        // public string Email { get; set; }
        public string FullName { get; set; }
        public string UserName { get; set; }
        public string Phonenumber { get; set; }
        public string Description { get; set; }
        public string Password { get; set; }
    }
    public class Info
    {
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Avatar { get; set; }
        public string Description { get; set; }
        // public int Idproduct {get;set;}
        public string Id { get; set; }
        // public DateTime Date{get; set;}
        // public float Total { get; set; }
        //  public int Quantity { get; set; }
    }
}