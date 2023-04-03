using Microsoft.AspNetCore.Mvc;
using newsapi_backend.Models;
using newsapi_backend.Services.Interfaces;

namespace newsapi_backend.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class NewsController : ControllerBase
    {
        private readonly IEverythingService _everythingService;
        private readonly ITopHeadlineService _topHeadlineService;

        public NewsController(IEverythingService everythingService, ITopHeadlineService topHeadlineService)
        {
            _everythingService = everythingService;
            _topHeadlineService = topHeadlineService;
        }

        [HttpGet("TopHeadline")]
        public async Task<IActionResult> GetTopHeadline([FromQuery] TopHeadlineSend topHeadlineRequest)
        {
            try
            {
                var articlesResult = await _topHeadlineService.GetTopHeadlineAsync(topHeadlineRequest);
                return Ok(articlesResult);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("Search")]
        public async Task<IActionResult> GetEverything([FromQuery] EverythingSend everythingRequest)
        {
            try
            {
                var articlesResult = await _everythingService.GetEverythingAsync(everythingRequest);
                return Ok(articlesResult);
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
