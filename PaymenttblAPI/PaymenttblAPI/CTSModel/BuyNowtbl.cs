using System;
using System.Collections.Generic;

#nullable disable

namespace PaymenttblAPI.CTSModel
{
    public partial class BuyNowtbl
    {
        public int Cakeid { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Phoneno { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Pincode { get; set; }
        public int Orderid { get; set; }

        public virtual Admincaketbl Cake { get; set; }
    }
}
