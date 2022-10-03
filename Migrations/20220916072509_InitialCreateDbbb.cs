using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetthietke1.Migrations
{
    public partial class InitialCreateDbbb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.CreateTable(
                name: "Order",
                columns: table => new
                {
                    Idorder = table.Column<string>(type: "text", nullable: false),
                    Iduser = table.Column<int>(type: "integer", nullable: false),
                    Idproduct = table.Column<int>(type: "integer", nullable: false),
                    Date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Total = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Order", x => x.Idorder);
                    table.ForeignKey(
                        name: "FK_Order_Product_Idproduct",
                        column: x => x.Idproduct,
                        principalTable: "Product",
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
                name: "Order");

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Idorder = table.Column<string>(type: "text", nullable: false),
                    Idproduct = table.Column<int>(type: "integer", nullable: false),
                    Iduser = table.Column<int>(type: "integer", nullable: false),
                    Date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Total = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Idorder);
                    table.ForeignKey(
                        name: "FK_Orders_Product_Idproduct",
                        column: x => x.Idproduct,
                        principalTable: "Product",
                        principalColumn: "Idproduct",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Orders_User_Iduser",
                        column: x => x.Iduser,
                        principalTable: "User",
                        principalColumn: "Iduser",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Orders_Idproduct",
                table: "Orders",
                column: "Idproduct");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_Iduser",
                table: "Orders",
                column: "Iduser");
        }
    }
}
