using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetthietke1.Migrations
{
    public partial class new12 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "options",
                table: "Menu",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "options",
                table: "Menu");
        }
    }
}
