using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using dotnetthietke1.Models;
using Microsoft.AspNetCore.Identity;

namespace dotnetthietke1
{

    public class User : IdentityUser
    {
        public static object Identity { get; internal set; }
        [MaxLength(300)]
        public string Avatar { get; set; }

        [MaxLength(500)]
        public string Description { get; set; }

        [MaxLength(100)]
        public string FullName { get; set; }
        public virtual ICollection<Orders> Orders { get; set; }
    }

}