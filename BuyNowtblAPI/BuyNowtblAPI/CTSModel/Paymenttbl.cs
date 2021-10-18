using System;
using System.Collections.Generic;

#nullable disable

namespace BuyNowtblAPI.CTSModel
{
    public partial class Paymenttbl
    {
        public int Userid { get; set; }
        public string Username { get; set; }
        public string CardHolderName { get; set; }
        public string CardNumber { get; set; }
        public string Cvv { get; set; }
        public int Paymentid { get; set; }

        public virtual Registrationtbl User { get; set; }
    }
}
