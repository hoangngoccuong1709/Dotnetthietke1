using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetthietke1.Migrations
{
    public partial class addcolumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "name",
                table: "SMTPs",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "name",
                table: "SMTPs");
        }
    }
}
