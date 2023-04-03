using NewsAPI.Models;
using newsapi_backend.Models;

namespace newsapi_backend.Services.Interfaces
{
    public interface IEverythingService
    {
        Task<ArticlesResult> GetEverythingAsync(EverythingSend everythingRequest);
    }
}
