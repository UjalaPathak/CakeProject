using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RegistrationTblAPI.CTSModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RegistrationTblAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationTblController : ControllerBase
    {
        private readonly CakeShopContext db;
        public RegistrationTblController(CakeShopContext _db)

        {
            db = _db;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            return Ok(await db.Registrationtbls.ToListAsync());
        }
        [HttpPost]
        public async Task<IActionResult> AddUser(Registrationtbl c)
        {
            db.Registrationtbls.Add(c);
            await db.SaveChangesAsync();
            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> UpdateUser(int id, Registrationtbl c)
        {
            //a = await db.Accounts.FindAsync(id);
            db.Entry(c).State = EntityState.Modified;
            await db.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteUser(int id)
        {
            Registrationtbl c = db.Registrationtbls.Find(id);
            db.Registrationtbls.Remove(c);
            await db.SaveChangesAsync();
            return Ok();
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<Registrationtbl>> GetUserById(int id)
        {
            Registrationtbl c = await db.Registrationtbls.FindAsync(id);
            return Ok(c);
        }
    }
}
