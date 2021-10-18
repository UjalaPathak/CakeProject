using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JWTAuthenticationAPICake.CakeModel;
using JWTAuthenticationAPICake.Repository;

namespace JWTAuthenticationAPICake.Service
{
    public class RegisterServ : IRegisterServ<Registrationtbl>
    {
        private readonly IRegisterRepo<Registrationtbl> repo_a;
        public RegisterServ(IRegisterRepo<Registrationtbl> repo_a)
        {
            this.repo_a = repo_a;
        }
        public List<Registrationtbl> GetRegistrationCredentials()
        {
            return repo_a.GetRegistrationCredentials();
        }
    }
}
