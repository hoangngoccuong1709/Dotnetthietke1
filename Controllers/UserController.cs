using System.Linq;
using System.Threading.Tasks;
using dotnetthietke1;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HRM2.Controllers
{
    [Route("/admin")]
    public class HomeController : ControllerBase
    {
        ApplicationDbContext db;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;

        public HomeController(ApplicationDbContext dbContext, UserManager<User> userManager)
        {
            this.db = dbContext;
            this.userManager = userManager;

        }

        [HttpGet("init")]
        public async Task<IActionResult> Init(string adminUserName = "admin", string adminPassword = "abc@123", string adminEmail = "none@gmail.com")
        {
            // nếu chưa có user nào thì tạo tk admin
           
            return Content("Done");
        }
    }
}