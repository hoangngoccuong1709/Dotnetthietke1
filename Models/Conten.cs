using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace dotnetthietke1{
   public class Conten 
   {
       [Key]
        public int Idconten{get;set;}

        public string NameConten{get;set;}

        public string Title{get;set;}
        public string Paragraph{get;set;}
    }
}