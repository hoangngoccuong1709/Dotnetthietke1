using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace dotnetthietke1
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options) : base(options){}
        public DbSet<Products> Products { get; set; }
        public DbSet<User> User { get;  set; }
        public DbSet<Conten> Conten { get; set; }
        public DbSet<Order> Order { get;  set; }
        public DbSet<Menu> Menu { get;  set; }

        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //     => optionsBuilder.UseNpgsql("DefaultConnection");

    }
}