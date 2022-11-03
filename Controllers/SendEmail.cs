

using System.Net;
using System.Net.Mail;
using dotnetthietke1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnetthietke1.Controller
{
    [Route("api/[controller]")]
    public class SendEmailController : ControllerBase
    {
        [HttpPost("ALL")]
        public async Task<ActionResult> SendEmail([FromBody] Subscribe info)
        {
            var fromAddress = new MailAddress("khaik59dhv@gmail.com", "kahi");

            var toAddress = new MailAddress("leo.tran.ht@gmail.com", "leo");
            const string fromPassword = "moetnosozdtxmshf";
            const string subject = "đây là cái qqq";
            const string body = "đây là cái nội dung";


            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
            };
            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body
            })
            {
                smtp.Send(message);
            }

            return Ok();


        }

    }
}