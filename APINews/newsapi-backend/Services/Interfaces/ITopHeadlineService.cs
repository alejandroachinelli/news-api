using NewsAPI.Models;
using newsapi_backend.Models;

namespace newsapi_backend.Services.Interfaces
{
    public interface ITopHeadlineService
    {
        Task<ArticlesResult> GetTopHeadlineAsync(TopHeadlineSend topHeadlineRequest);
    }
}
