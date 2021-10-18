using System;
using System.Collections.Generic;

#nullable disable

namespace PaymenttblAPI.CTSModel
{
    public partial class Admincaketbl
    {
        public Admincaketbl()
        {
            BuyNowtbls = new HashSet<BuyNowtbl>();
        }

        public int Cakeid { get; set; }
        public string Cakepicture { get; set; }
        public string Cakeweight { get; set; }
        public decimal Price { get; set; }
        public string Cakename { get; set; }
        public string Shape { get; set; }

        public virtual ICollection<BuyNowtbl> BuyNowtbls { get; set; }
    }
}
