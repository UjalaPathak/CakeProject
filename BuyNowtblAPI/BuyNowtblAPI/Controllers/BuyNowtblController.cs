using BuyNowtblAPI.CTSModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BuyNowtblAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyNowtblController : ControllerBase
    {
        private readonly CakeShopContext db;
        public BuyNowtblController(CakeShopContext _db)

        {
            db = _db;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllOrders()
        {
            return Ok(await db.BuyNowtbls.ToListAsync());
        }
        [HttpPost]
        public async Task<IActionResult> AddOrder(BuyNowtbl c)
        {
            db.BuyNowtbls.Add(c);
            await db.SaveChangesAsync();
            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> UpdateOrder(int id, BuyNowtbl c)
        {
            //a = await db.Accounts.FindAsync(id);
            db.Entry(c).State = EntityState.Modified;
            await db.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteOrder(int id)
        {
            BuyNowtbl c = db.BuyNowtbls.Find(id);
            db.BuyNowtbls.Remove(c);
            await db.SaveChangesAsync();
            return Ok();
        }

        [HttpGet]
        [Route("id")]
        public async Task<ActionResult<BuyNowtbl>> GetOrderById(int id)
        {
            BuyNowtbl c = await db.BuyNowtbls.FindAsync(id);
            return Ok(c);
        }
    }
}
