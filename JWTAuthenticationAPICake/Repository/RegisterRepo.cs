using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JWTAuthenticationAPICake.CakeModel;

namespace JWTAuthenticationAPICake.Repository
{
    public class RegisterRepo : IRegisterRepo<Registrationtbl>
    {
        private readonly IRegistration<Registrationtbl> obj_a;
        public RegisterRepo(IRegistration<Registrationtbl> obj_a)
        {
            this.obj_a = obj_a;
        }
        public List<Registrationtbl> GetRegistrationCredentials()
        {
            return obj_a.GetRegistrationCredentials();
        }
    }
}
