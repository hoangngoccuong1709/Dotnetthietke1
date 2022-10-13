using System.ComponentModel.DataAnnotations;
//namespace dotnetthietke1.API.Crud.Data.Entities;
namespace dotnetthietke1.Models
{
    public class Product
    {
        [Key]
        public int Idproduct { get; set; }

        public string NameProduct { get; set; }

        public string Image { get; set; }
        // public int Quantity{get ; set;}
        public float Price { get; set; }
        public string Title { get; set; }
        public virtual ICollection<Orders> Orders { get; set; }
    }
}