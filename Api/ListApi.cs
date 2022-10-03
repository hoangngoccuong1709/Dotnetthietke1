using Microsoft.AspNetCore.Mvc;

namespace dotnetthietke1.Controller{
    [Route("api/[Controller]")]
    [ApiController]
    public class ListApi : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string>Get()
        {
            return new string[]{"value1","value2"};
        }
        [HttpGet("{id}")]
        public string Get(int id){
            return "value";
        }
        [HttpPost]
        public void Post([FromBody]string value)
        {
            
        }
    }
}
