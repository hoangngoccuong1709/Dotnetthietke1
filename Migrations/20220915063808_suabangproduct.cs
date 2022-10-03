using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace dotnetthietke1.Migrations
{
    public partial class suabangproduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Products_Idproduct",
                table: "Order");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.CreateTable(
                name: "Product",
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
                    table.PrimaryKey("PK_Product", x => x.Idproduct);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Product_Idproduct",
                table: "Order",
                column: "Idproduct",
                principalTable: "Product",
                principalColumn: "Idproduct",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Product_Idproduct",
                table: "Order");

            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Idproduct = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Image = table.Column<string>(type: "text", nullable: false),
                    NameProduct = table.Column<string>(type: "text", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Idproduct);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Products_Idproduct",
                table: "Order",
                column: "Idproduct",
                principalTable: "Products",
                principalColumn: "Idproduct",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
