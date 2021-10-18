using System;
using System.Collections.Generic;
using System.Linq;

#nullable disable

namespace JWTAuthenticationAPICake.CakeModel
{
    public partial class Registrationtbl:IRegistration<Registrationtbl>
    {
        private readonly CakeShopContext nc = new CakeShopContext();

        public int Userid { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string RePassword { get; set; }

        public List<Registrationtbl> GetRegistrationCredentials()
        {
            return nc.Registrationtbls.ToList();
        }
    }
}
