using Microsoft.Extensions.Options;
using NewsAPI.Constants;
using NewsAPI;
using NewsAPI.Models;
using newsapi_backend.Models;
using newsapi_backend.Services.Interfaces;

namespace newsapi_backend.Services
{
    public class EverythingService : IEverythingService
    {
        private readonly NewsApiOptions _newsApiOptions;

        public EverythingService(IOptions<NewsApiOptions> newsApiOptions)
        {
            _newsApiOptions = newsApiOptions.Value;
        }

        public async Task<ArticlesResult> GetEverythingAsync(EverythingSend everythingRequest)
        {
            var newsApiClient = new NewsApiClient(_newsApiOptions.ApiKey);
            var articlesResponse = await newsApiClient.GetEverythingAsync(new EverythingRequest
            {
                Q = everythingRequest.Keyword,
                From= everythingRequest.From,
                To= everythingRequest.To,
                Page = everythingRequest.Page,
                PageSize = everythingRequest.PageSize,
                Language= (Languages)Enum.Parse(typeof(Languages), everythingRequest.Language),
            });

            if (articlesResponse.Status == Statuses.Ok)
            {
                return articlesResponse;
            }
            else
            {
                return new ArticlesResult();
            }
        }
    }
}
