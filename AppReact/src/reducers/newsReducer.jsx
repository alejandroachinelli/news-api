import {
  SET_COUNTRY,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_SUCCESS,
  SEARCH_NEWS_FAILURE,
  RESET_SEARCH
} from "../actions/types";

const initialState = {
  country: "AR",
  topHeadline: [],
  totalTopHeadline: 0,
  articles: [],
  totalArticles: 0,
  loading: false,
  error: "",
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload
      };
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        topHeadline: action.payload.articles,
        totalTopHeadline: action.payload.totalResults
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case SEARCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case SEARCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload.articles,
        totalArticles: action.payload.totalResults
      };
    case SEARCH_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case RESET_SEARCH:
      return {
        ...state,
        articles: [],
        totalArticles: 0,
        loading: false,
        error: ""
      };
    default:
      return state;
  }
};

export default newsReducer;