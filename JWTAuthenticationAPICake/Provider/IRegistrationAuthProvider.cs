using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace JWTAuthenticationAPICake.Provider
{
    public interface IRegistrationAuthProvider<Registrationtbl>
    {
        public string GenerateJSONWebToken(CakeModel.Registrationtbl admin_info, IConfiguration _config);
        public dynamic AuthenticateUser(CakeModel.Registrationtbl login);
    }
}
