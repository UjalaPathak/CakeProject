using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JWTAuthenticationAPICake.CakeModel;

namespace JWTAuthenticationAPICake.Repository
{
    public interface IRegisterRepo<Registrationtbl>
    {
        public List<Registrationtbl> GetRegistrationCredentials();
    }
}
