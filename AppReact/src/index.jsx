import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import 'semantic-ui-css/semantic.min.css';
import News from './containers/News';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const store = createStore(reducers, applyMiddleware(thunk));

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <News />
  </Provider>
);