using System.ComponentModel.DataAnnotations;
//namespace dotnetthietke1.API.Crud.Data.Entities;
namespace dotnetthietke1.Models
{
    public class SendEmail
    {

        public string SendName { get; set; }

        public string SendNameEmail { get; set; }

        public string PassSMTP { get; set; }
        // public int Quantity{get ; set;}
        public string Title { get; set; }
        public string Content { get; set; }

    }
}