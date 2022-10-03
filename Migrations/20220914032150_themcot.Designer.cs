﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using dotnetthietke1;

#nullable disable

namespace dotnetthietke1.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20220914032150_themcot")]
    partial class themcot
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("dotnetthietke1.Models.Contens", b =>
                {
                    b.Property<int>("Idconten")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Idconten"));

                    b.Property<string>("NameConten")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Paragraph")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Posion")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Idconten");

                    b.ToTable("Contens");
                });

            modelBuilder.Entity("dotnetthietke1.Models.ListProduct", b =>
                {
                    b.Property<int>("Idproduct")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Idproduct"));

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("NameProduct")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Idproduct");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("dotnetthietke1.Models.Order", b =>
                {
                    b.Property<int>("Idorder")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Idorder"));

                    b.Property<DateTime>("Date")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("Idproduct")
                        .HasColumnType("integer");

                    b.Property<int>("Iduser")
                        .HasColumnType("integer");

                    b.Property<string>("NameProduct")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<float>("Total")
                        .HasColumnType("real");

                    b.HasKey("Idorder");

                    b.HasIndex("Idproduct");

                    b.HasIndex("Iduser");

                    b.ToTable("Order");
                });

            modelBuilder.Entity("dotnetthietke1.Models.User", b =>
                {
                    b.Property<int>("Iduser")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Iduser"));

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("NameUser")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Iduser");

                    b.ToTable("User");
                });

            modelBuilder.Entity("dotnetthietke1.Models.Order", b =>
                {
                    b.HasOne("dotnetthietke1.Models.ListProduct", "Product")
                        .WithMany()
                        .HasForeignKey("Idproduct")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("dotnetthietke1.Models.User", "user")
                        .WithMany()
                        .HasForeignKey("Iduser")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");

                    b.Navigation("user");
                });
#pragma warning restore 612, 618
        }
    }
}
