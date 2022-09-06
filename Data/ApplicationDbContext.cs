using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace dotnetthietke1
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options) : base(options){}
        public DbSet<ListProduct> Products { get; set; }
        public object User { get; internal set; }


        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //     => optionsBuilder.UseNpgsql("DefaultConnection");

    }
}