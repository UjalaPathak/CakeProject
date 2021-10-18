using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PaymenttblAPI.CTSModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaymenttblAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymenttblController : ControllerBase
    {
        private readonly CakeShopContext db;
        public PaymenttblController(CakeShopContext _db)

        {
            db = _db;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllPayments()
        {
            return Ok(await db.Paymenttbls.ToListAsync());
        }
        [HttpPost]
        public async Task<IActionResult> AddPayment(Paymenttbl c)
        {
            db.Paymenttbls.Add(c);
            await db.SaveChangesAsync();
            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> UpdatePayment(int id, Paymenttbl c)
        {
            //a = await db.Accounts.FindAsync(id);
            db.Entry(c).State = EntityState.Modified;
            await db.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeletePayment(int id)
        {
            Paymenttbl c = db.Paymenttbls.Find(id);
            db.Paymenttbls.Remove(c);
            await db.SaveChangesAsync();
            return Ok();
        }

        [HttpGet]
        [Route("id")]
        public async Task<ActionResult<Paymenttbl>> GetPaymentById(int id)
        {
            Paymenttbl c = await db.Paymenttbls.FindAsync(id);
            return Ok(c);
        }
    }
}
