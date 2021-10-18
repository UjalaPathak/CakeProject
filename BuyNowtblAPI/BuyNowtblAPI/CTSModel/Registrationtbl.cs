using System;
using System.Collections.Generic;

#nullable disable

namespace BuyNowtblAPI.CTSModel
{
    public partial class Registrationtbl
    {
        public Registrationtbl()
        {
            Paymenttbls = new HashSet<Paymenttbl>();
        }

        public int Userid { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string RePassword { get; set; }

        public virtual ICollection<Paymenttbl> Paymenttbls { get; set; }
    }
}
