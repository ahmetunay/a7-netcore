using Microsoft.EntityFrameworkCore;

namespace LogApi1.Models
{
    public class LogContext: DbContext
    {
        public LogContext(DbContextOptions<LogContext> options)
            : base(options)
        {
        }

        public DbSet<LogItem> LogItems { get; set; }
    }
}