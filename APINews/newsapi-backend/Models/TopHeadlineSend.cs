namespace newsapi_backend.Models
{
    public class TopHeadlineSend
    {
        public string Country { get; set; }
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }
}
