using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetthietke1.Migrations
{
    public partial class order : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Product_Idproduct",
                table: "Order");

            migrationBuilder.DropForeignKey(
                name: "FK_Order_User_Iduser",
                table: "Order");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Order",
                table: "Order");

            migrationBuilder.RenameTable(
                name: "Order",
                newName: "Orders");

            migrationBuilder.RenameIndex(
                name: "IX_Order_Iduser",
                table: "Orders",
                newName: "IX_Orders_Iduser");

            migrationBuilder.RenameIndex(
                name: "IX_Order_Idproduct",
                table: "Orders",
                newName: "IX_Orders_Idproduct");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Orders",
                table: "Orders",
                column: "Idorder");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Product_Idproduct",
                table: "Orders",
                column: "Idproduct",
                principalTable: "Product",
                principalColumn: "Idproduct",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_User_Iduser",
                table: "Orders",
                column: "Iduser",
                principalTable: "User",
                principalColumn: "Iduser",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Product_Idproduct",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_User_Iduser",
                table: "Orders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Orders",
                table: "Orders");

            migrationBuilder.RenameTable(
                name: "Orders",
                newName: "Order");

            migrationBuilder.RenameIndex(
                name: "IX_Orders_Iduser",
                table: "Order",
                newName: "IX_Order_Iduser");

            migrationBuilder.RenameIndex(
                name: "IX_Orders_Idproduct",
                table: "Order",
                newName: "IX_Order_Idproduct");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Order",
                table: "Order",
                column: "Idorder");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Product_Idproduct",
                table: "Order",
                column: "Idproduct",
                principalTable: "Product",
                principalColumn: "Idproduct",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Order_User_Iduser",
                table: "Order",
                column: "Iduser",
                principalTable: "User",
                principalColumn: "Iduser",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
