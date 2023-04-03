using Microsoft.Extensions.Options;
using NewsAPI.Constants;
using NewsAPI;
using NewsAPI.Models;
using newsapi_backend.Models;
using newsapi_backend.Services.Interfaces;

namespace newsapi_backend.Services
{
    public class TopHeadlineService : ITopHeadlineService
    {
        private readonly NewsApiOptions _newsApiOptions;

        public TopHeadlineService(IOptions<NewsApiOptions> newsApiOptions)
        {
            _newsApiOptions = newsApiOptions.Value;
        }

        public async Task<ArticlesResult> GetTopHeadlineAsync(TopHeadlineSend topHeadlineRequest)
        {
            var newsApiClient = new NewsApiClient(_newsApiOptions.ApiKey);
            var articlesResponse = await newsApiClient.GetTopHeadlinesAsync(new TopHeadlinesRequest
            {
                Country = (Countries)Enum.Parse(typeof(Countries), topHeadlineRequest.Country),
                Page = topHeadlineRequest.Page,
                PageSize = topHeadlineRequest.PageSize,
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
