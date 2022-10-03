using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetthietke1.Migrations
{
    public partial class I : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_AspNetUsers_FullName",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "FullName",
                table: "Orders",
                newName: "Id");

            migrationBuilder.RenameIndex(
                name: "IX_Orders_FullName",
                table: "Orders",
                newName: "IX_Orders_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_AspNetUsers_Id",
                table: "Orders",
                column: "Id",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_AspNetUsers_Id",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Orders",
                newName: "FullName");

            migrationBuilder.RenameIndex(
                name: "IX_Orders_Id",
                table: "Orders",
                newName: "IX_Orders_FullName");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_AspNetUsers_FullName",
                table: "Orders",
                column: "FullName",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
