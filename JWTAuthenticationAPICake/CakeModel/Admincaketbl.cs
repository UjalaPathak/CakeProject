using System;
using System.Collections.Generic;

#nullable disable

namespace JWTAuthenticationAPICake.CakeModel
{
    public partial class Admincaketbl
    {
        public int Cakeid { get; set; }
        public string Cakepicture { get; set; }
        public string Cakeweight { get; set; }
        public decimal Price { get; set; }
        public string Cakename { get; set; }
        public string Shape { get; set; }
    }
}
