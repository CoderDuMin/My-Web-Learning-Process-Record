import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './02_计数器实现对比/App'
// import App from './03_useState使用/App'
import { Provider } from 'react-redux'
import store from './13_redux中的hooks/store';
// import App from './07_useCallback的使用/App'
// import App from './13_redux中的hooks/App'
// import App from './14_useId的使用/App'
import App from './15_useTransition使用/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
