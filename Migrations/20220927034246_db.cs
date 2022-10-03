using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetthietke1.Migrations
{
    public partial class db : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_AspNetUsers_UserId",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Product_ProductIdproduct",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Orders_ProductIdproduct",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Orders_UserId",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "ProductIdproduct",
                table: "Orders",
                newName: "Idproduct");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Orders",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Id",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "Idproduct",
                table: "Orders",
                newName: "ProductIdproduct");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Orders",
                type: "text",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ProductIdproduct",
                table: "Orders",
                column: "ProductIdproduct");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_UserId",
                table: "Orders",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_AspNetUsers_UserId",
                table: "Orders",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Product_ProductIdproduct",
                table: "Orders",
                column: "ProductIdproduct",
                principalTable: "Product",
                principalColumn: "Idproduct",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
