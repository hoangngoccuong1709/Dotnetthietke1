using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnetthietke1.Models
{
    public class Orders
    {
        [Key]
        public int Id { get; set; }

        public string UserId { get; set; }
        public int Quantity { get; set; }

        public DateTime Date { get; set; }

        public float Total { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}