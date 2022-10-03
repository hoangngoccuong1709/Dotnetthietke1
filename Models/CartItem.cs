using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace dotnetthietke1.Models
{
    public class CartItem
    {
        [Key]
        public string ItemId { get; set; }

        public string CartId { get; set; }

        public int Quantity { get; set; }

        public System.DateTime DateCreated { get; set; }

        public int Idproduct { get; set; }

        public virtual Product Product { get; set; }
        [ForeignKey("Id")]
        public int Iduser{get;set;}
         [ForeignKey("Iduser")]
        public virtual User Users{get; set;}


    }
}