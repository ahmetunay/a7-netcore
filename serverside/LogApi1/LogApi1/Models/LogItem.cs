using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LogApi1.Models
{
    public class LogItem
    {
        public long Id { get; set; }
        public string message { get; set; }

        public DateTime timeStamp { get; set; }
        public LogType logType { get; set; }

        public LogItem(string message, LogType logType)
        {
            this.message = message;
            this.timeStamp = DateTime.Now;
            this.logType = logType;
        }
    }
    public enum LogType
    {
        Exception, Trace, Info
    }
}
