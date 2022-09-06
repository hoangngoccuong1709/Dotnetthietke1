using Microsoft.AspNetCore.Identity;

namespace dotnetthietke1{
   public class User : IdentityUser<int>
   {
        public int Id{get;set;}

        public string NameUser{get;set;}

        public string Password{get;set;}

        public DateTime Date{get;set;}
    
    }
}