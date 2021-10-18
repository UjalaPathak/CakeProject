using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JWTAuthenticationAPICake.CakeModel
{
    public interface IRegistration<Registrationtbl>
    {
        public List<Registrationtbl> GetRegistrationCredentials();
    }
}
