using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace dotnetthietke1.Models
{
    public class Contens
    {
        [Key]
        public int Idconten { get; set; }

        public string NameConten { get; set; }

        public string Title { get; set; }
        public string Paragraph { get; set; }
        public string Posion { get; set; }
        public string Imageconten { get; set; }
    }
}