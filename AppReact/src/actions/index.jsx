import newsapi from '../apis/newsapi';
import {
  SET_COUNTRY,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_SUCCESS,
  SEARCH_NEWS_FAILURE,
  RESET_SEARCH,
} from "./types";

export const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});

export const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST,
});

export const fetchNewsSuccess = (news) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: news,
});

export const fetchNewsFailure = (error) => ({
  type: FETCH_NEWS_FAILURE,
  payload: error,
});

export const searchNewsRequest = () => ({
  type: SEARCH_NEWS_REQUEST,
});

export const searchNewsSuccess = (news) => ({
  type: SEARCH_NEWS_SUCCESS,
  payload: news,
});

export const searchNewsFailure = (error) => ({
  type: SEARCH_NEWS_FAILURE,
  payload: error,
});

export const resetSearch = () => ({
  type: RESET_SEARCH,
});

export const fetchNews = (country, page, pageSize) => async (dispatch) => {
  dispatch(fetchNewsRequest());

  try {
    let url = `/TopHeadline?country=${country}`;
    if(page)
      url += `&page=${page}`;
    if(pageSize)
      url += `&pageSize=${pageSize}`;
    const res = await newsapi.get(url);
    const data = res.data;

    dispatch(fetchNewsSuccess(data));
  } catch (error) {
    dispatch(fetchNewsFailure(error.message));
  }
};

export const searchNews = (keyword, dateFrom, dateTo, language, page, pageSize) => async (dispatch) => {
  dispatch(searchNewsRequest());

  try {
    let url = `/Search?keyword=${keyword}&language=${language}`;
    if(dateFrom)
      url += `&from=${dateFrom}`;
    if(dateTo)
      url += `&to=${dateTo}`;
    if(page)
      url += `&page=${page}`;
    if(pageSize)
      url += `&pageSize=${pageSize}`;
      
    const res = await newsapi.get(url);
    const data = res.data;

    dispatch(searchNewsSuccess(data));
  } catch (error) {
    dispatch(searchNewsFailure(error.message));
  }
};