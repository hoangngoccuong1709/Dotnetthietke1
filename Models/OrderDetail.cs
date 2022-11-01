using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using dotnetthietke1;
using dotnetthietke1.Models;

public class OrderDetail
{
    [Key]
    public int Id { get; set; }

    [Display(Name = "Sản phẩm")]
    public int ProductId { get; set; }

    [Display(Name = "Số lượng")]
    public string UserId { get; set; }
    public float Quantity { get; set; }

    [Display(Name = "Đơn giá")]
    public double Price { get; set; }//save lại cái a k làm dc // nhấp vào con

    [Display(Name = "Đơn hàng")]
    public int OrderId { get; set; }

    [ForeignKey("OrderId")]
    public virtual Orders Order { get; set; }

    [ForeignKey("ProductId")]
    public virtual Product Product { get; set; }

    [ForeignKey("UserId")]
    public virtual User User { get; set; }
}