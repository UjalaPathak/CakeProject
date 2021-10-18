using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JWTAuthenticationAPICake.CakeModel;
using JWTAuthenticationAPICake.Service;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace JWTAuthenticationAPICake.Provider
{
    public class RegistrationAuthProvider : IRegistrationAuthProvider<Registrationtbl>
    {
        private readonly IRegisterServ<Registrationtbl> ap_serv;
        public RegistrationAuthProvider(IRegisterServ<Registrationtbl> ap_serv)
        {
            this.ap_serv = ap_serv;
        }
        public string GenerateJSONWebToken(Registrationtbl admin_info, IConfiguration _config)
        {
            if (admin_info == null)
                return null;
            try
            {
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));

                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                    _config["Jwt:Issuer"],
                    null,
                    expires: DateTime.Now.AddMinutes(100),
                    signingCredentials: credentials);

                return new JwtSecurityTokenHandler().WriteToken(token);
            }
            catch (Exception)
            {
                return null;
            }

        }
        public dynamic AuthenticateUser(Registrationtbl login)
        {
            if (login == null)
            {
                return null;
            }
            try
            {
                Registrationtbl user = null;

                List<Registrationtbl> ValidUsers = ap_serv.GetRegistrationCredentials();

                if (ValidUsers == null)
                    return null;
                else
                {
                    if (ValidUsers.Any(u => u.Username == login.Username && u.Password == login.Password))
                    {
                        user = new Registrationtbl { Username = login.Username, Password = login.Password };
                    }
                }

                return user;
            }
            catch (Exception)
            {
                return null;
            }

        }
    }
}
