using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NexusCommerce.API.Data;
using NexusCommerce.API.Models;

namespace NexusCommerce.API.Controllers;

[Authorize][ApiController][Route("api/[controller]")]
public class ProductsController : ControllerBase {
    private readonly AppDbContext _context;
    public ProductsController(AppDbContext context) { _context = context; }

    [HttpGet] public async Task<IActionResult> GetAll() => Ok(await _context.Products.Include(p => p.Category).ToListAsync());

    [HttpPost] public async Task<IActionResult> Create(Product product) {
        _context.Products.Add(product);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetAll), new { id = product.Id }, product);
    }

    [HttpDelete("{id}")] public async Task<IActionResult> Delete(int id) {
        var product = await _context.Products.FindAsync(id);
        if (product == null) return NotFound();
        _context.Products.Remove(product);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}