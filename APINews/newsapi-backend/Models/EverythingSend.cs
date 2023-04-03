using NewsAPI.Constants;

namespace newsapi_backend.Models
{
    public class EverythingSend
    {
        public string Keyword { get; set; }

        public DateTime? From { get; set; }

        public DateTime? To { get; set; }

        public string Language { get; set; }

        public int Page { get; set; }

        public int PageSize { get; set; }
    }
}
