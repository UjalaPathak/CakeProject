using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JWTAuthenticationAPICake.CakeModel;
using JWTAuthenticationAPICake.Provider;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace JWTAuthenticationAPICake.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorizationController : ControllerBase
    {
        private static readonly log4net.ILog _log4net = log4net.LogManager.GetLogger(typeof(AuthorizationController));

        private IConfiguration config;

        private readonly IRegistrationAuthProvider<Registrationtbl> reg_ap;

        public AuthorizationController(IConfiguration config, IRegistrationAuthProvider<Registrationtbl> reg_ap)
        {
            this.config = config;
            this.reg_ap = reg_ap;
        }

        [HttpPost]
        [Route("Registration")]
        public IActionResult Login([FromBody] Registrationtbl login)
        {
            _log4net.Info("Http Post request");
            if (login == null)
            {
                return BadRequest();
            }
            try
            {

                IActionResult response = Unauthorized();
                Registrationtbl user = reg_ap.AuthenticateUser(login);

                if (user != null)
                {
                    var tokenString = reg_ap.GenerateJSONWebToken(user, config);
                    response = Ok(tokenString);

                }

                return response;
            }
            catch (Exception e)
            {
                _log4net.Error("Exception Occured " + e.Message);
                return StatusCode(500);
            }

        }
    }
}
