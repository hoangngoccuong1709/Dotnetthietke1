// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Web;
// using dotnetthietke1.Models;

// namespace dotnetthietke1.Logic
// {
//   public class ShoppingCartActions : IDisposable
//   {
//     public string ShoppingCartId { get; set; }

//     ApplicationDbContext db;
//     private readonly ApplicationDbContext _applicationDbContext;
//     // public ShoppingCartActions(ApplicationDbContext applicationdDbContext)
//     // {
//     //     _applicationDbContetext = applicationdDbContext;
// 	// 	 this.db = applicationdDbContext;
//     // }
//     public const string CartSessionKey = "Idorder";

//     public void AddToCart(int id)
//     {
//       // Retrieve the product from the database.           
//       ShoppingCartId = GetCartId();

//       var cartItem = _applicationDbContext.Orders.SingleOrDefault(
//           c => c.Idorder == ShoppingCartId
//           && c.Idproduct == id);
//       if (cartItem == null)
//       {
//         // Create a new cart item if no cart item exists.                 
//         cartItem = new CartItem
//         {
//           ItemId = Guid.NewGuid().ToString(),
//           Idproduct = id,
//           CartId = ShoppingCartId,
//           Product = _applicationDbContext.Product.SingleOrDefault()
//          //  p => p.Idproduct == id),
//           Quantity = 1,
//           DateCreated = DateTime.Now
//         };

//         _applicationDbContext.Orders.Add(cartItem);
//       }
//       else
//          {
//         // If the item does exist in the cart,                  
//         // then add one to the quantity.                 
//         cartItem.Quantity++;
//       }
//       _applicationDbContext.SaveChanges();
//     }

//     public void Dispose()
//     {
//       if (_applicationDbContext != null)
//       {
//         _applicationDbContext.Dispose();
//         //_applicationDbContext = null;
//       }
//     }

//     public string GetCartId()
//     {
//       if (HttpContext.Current.Session[CartSessionKey] == null)
//       {
//         if (!string.IsNullOrWhiteSpace(HttpContext.Current.User.Identity.Name))
//         {
//           HttpContext.Current.Session[CartSessionKey] = HttpContext.Current.User.Identity.Name;
//         }
//         else
//         {
//           // Generate a new random GUID using System.Guid class.     
//           Guid tempCartId = Guid.NewGuid();
//           HttpContext.Current.Session[CartSessionKey] = tempCartId.ToString();
//         }
//       }
//       return HttpContext.Current.Session[CartSessionKey].ToString();
//     }

//     public List<CartItem> GetCartItems()
//     {
//       ShoppingCartId = GetCartId();

//       return _applicationDbContext.Orders.Where(
//           c => c.CartId == ShoppingCartId).ToList();
//     }
//   }
// }