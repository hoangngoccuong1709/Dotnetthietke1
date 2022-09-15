using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace dotnetthietke1.Migrations
{
    public partial class Migrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Conten",
                columns: table => new
                {
                    Idconten = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    NameConten = table.Column<string>(type: "text", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false),
                    Paragraph = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Conten", x => x.Idconten);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Idproduct = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    NameProduct = table.Column<string>(type: "text", nullable: false),
                    Image = table.Column<string>(type: "text", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Idproduct);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Iduser = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    NameUser = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    Date = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Iduser);
                });

            migrationBuilder.CreateTable(
                name: "Order",
                columns: table => new
                {
                    Idorder = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Iduser = table.Column<int>(type: "integer", nullable: false),
                    Idproduct = table.Column<int>(type: "integer", nullable: false),
                    NameProduct = table.Column<string>(type: "text", nullable: false),
                    Date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Total = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Order", x => x.Idorder);
                    table.ForeignKey(
                        name: "FK_Order_Products_Idproduct",
                        column: x => x.Idproduct,
                        principalTable: "Products",
                        principalColumn: "Idproduct",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Order_User_Iduser",
                        column: x => x.Iduser,
                        principalTable: "User",
                        principalColumn: "Iduser",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Order_Idproduct",
                table: "Order",
                column: "Idproduct");

            migrationBuilder.CreateIndex(
                name: "IX_Order_Iduser",
                table: "Order",
                column: "Iduser");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Conten");

            migrationBuilder.DropTable(
                name: "Order");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
