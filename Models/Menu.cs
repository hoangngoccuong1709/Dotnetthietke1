using System.ComponentModel.DataAnnotations;

namespace dotnetthietke1{
    public class Menu{
        [Key]
        public int idMenu{get;set;}
        public string nameMenu{get;set;}
        public string linkMenu{get;set;}
        public string type{get;set;}
    }
}