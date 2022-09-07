using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnetthietke1{
    public class Order{
        [Key]
        public int Idorder{get;set;}

        public int Iduser{get;set;}

        public int Idproduct{get;set;}
        public string NameProduct{get;set;}

        public DateTime Date{get;set;}

        public float Total{get ;set;}
        [ForeignKey("Iduser")]
        public virtual User user{get; set;}
        [ForeignKey("Idproduct")]
        public virtual ListProduct Product{get; set;}
    
    }
}