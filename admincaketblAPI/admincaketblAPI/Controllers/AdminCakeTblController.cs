using admincaketblAPI.CTSModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace admincaketblAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminCakeTblController : ControllerBase
    {
        
            private readonly CakeShopContext db;
            public AdminCakeTblController(CakeShopContext _db)

            {
                db = _db;
            }
            [HttpGet]
            public async Task<IActionResult> GetAllCakes()
            {
                return Ok(await db.Admincaketbls.ToListAsync());
            }
            [HttpPost]
            public async Task<IActionResult> AddCake(Admincaketbl c)
            {
                db.Admincaketbls.Add(c);
                await db.SaveChangesAsync();
                return Ok();
            }
            [HttpPut]
            public async Task<IActionResult> UpdateCake(int id, Admincaketbl c)
            {
                //a = await db.Accounts.FindAsync(id);
                db.Entry(c).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return Ok();
            }

            [HttpDelete]
            public async Task<IActionResult> DeleteCake(int id)
            {
                Admincaketbl c = db.Admincaketbls.Find(id);
                db.Admincaketbls.Remove(c);
                await db.SaveChangesAsync();
                return Ok();
            }

            [HttpGet]
            [Route("{id}")]
            public async Task<ActionResult<Admincaketbl>> GetCakeById(int id)
            {
                Admincaketbl c = await db.Admincaketbls.FindAsync(id);
                return Ok(c);
            }
        
    }
}
