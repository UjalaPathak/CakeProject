using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JWTAuthenticationAPICake.CakeModel;

namespace JWTAuthenticationAPICake.Service
{
    public interface IRegisterServ<Registrationtbl>
    {
        public List<Registrationtbl> GetRegistrationCredentials();
    }
}
