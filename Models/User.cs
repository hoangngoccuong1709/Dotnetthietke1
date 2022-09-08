using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace dotnetthietke1{
   public class User 
//    : IdentityUser<int>
   {
        [Key]
        public int Iduser{get;set;}
        [Required]
        public string NameUser{get;set;}

        public string Password{get;set;}

        public string Date{get;set;}
    
    }
}