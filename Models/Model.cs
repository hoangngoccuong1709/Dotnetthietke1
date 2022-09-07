using System.ComponentModel.DataAnnotations;

namespace dotnetthietke1{
    public class ListProduct{
        [Key]
        public int Idproduct{get;set;}

        public string NameProduct{get;set;}

        public string Image{get;set;}

        public string Title{get;set;}
    
    }
}