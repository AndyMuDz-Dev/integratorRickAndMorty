import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// ReactDOM.render(<App />, document.getElementById('root'));

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
