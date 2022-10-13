using System.Collections.Generic;
using dotnetthietke1.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace dotnetthietke1
{

    // public class ApplicationDbContext : DbContext
    public class ApplicationDbContext : IdentityDbContext<User, IdentityRole, string>
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<Product> Product { get; set; }
        //public DbSet<Users> User { get;  set; }
        public DbSet<Contens> Contens { get; set; }
        public DbSet<Orders> Orders { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // builder.Entity<TodoItem>()
            //     .HasOne<TodoList>(e => e.List)
            //     .WithMany(e => e.Items)
            //     .HasForeignKey(e => e.ListId);

            // builder.Entity<TodoItem>()
            //     .HasIndex(e => e.Title)
            //     .IsUnique();

        }

        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //     => optionsBuilder.UseNpgsql("DefaultConnection");

    }
}