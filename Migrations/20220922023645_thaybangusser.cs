using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetthietke1.Migrations
{
    public partial class thaybangusser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_User_Iduser",
                table: "Orders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_User",
                table: "User");

            migrationBuilder.RenameTable(
                name: "User",
                newName: "Users");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Users",
                table: "Users",
                column: "Iduser");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Users_Iduser",
                table: "Orders",
                column: "Iduser",
                principalTable: "Users",
                principalColumn: "Iduser",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Users_Iduser",
                table: "Orders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Users",
                table: "Users");

            migrationBuilder.RenameTable(
                name: "Users",
                newName: "User");

            migrationBuilder.AddPrimaryKey(
                name: "PK_User",
                table: "User",
                column: "Iduser");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_User_Iduser",
                table: "Orders",
                column: "Iduser",
                principalTable: "User",
                principalColumn: "Iduser",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
