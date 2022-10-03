using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetthietke1.Migrations
{
    public partial class use : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_AspNetUsers_Id",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Product_Idproduct",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "Idproduct",
                table: "Orders",
                newName: "ProductIdproduct");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Orders",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Orders_Idproduct",
                table: "Orders",
                newName: "IX_Orders_ProductIdproduct");

            migrationBuilder.RenameIndex(
                name: "IX_Orders_Id",
                table: "Orders",
                newName: "IX_Orders_UserId");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_AspNetUsers_UserId",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Product_ProductIdproduct",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Orders",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ProductIdproduct",
                table: "Orders",
                newName: "Idproduct");

            migrationBuilder.RenameIndex(
                name: "IX_Orders_UserId",
                table: "Orders",
                newName: "IX_Orders_Id");

            migrationBuilder.RenameIndex(
                name: "IX_Orders_ProductIdproduct",
                table: "Orders",
                newName: "IX_Orders_Idproduct");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_AspNetUsers_Id",
                table: "Orders",
                column: "Id",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Product_Idproduct",
                table: "Orders",
                column: "Idproduct",
                principalTable: "Product",
                principalColumn: "Idproduct",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
