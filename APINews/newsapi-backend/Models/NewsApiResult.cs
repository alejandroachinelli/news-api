using NewsAPI.Models;
using Newtonsoft.Json;

namespace newsapi_backend.Models
{
    public class NewsApiResult
    {
        [JsonProperty("status")]
        public string Status { get; set; }

        [JsonProperty("totalResults")]
        public int TotalResults { get; set; }

        [JsonProperty("articles")]
        public List<Article> Articles { get; set; }
    }
}
