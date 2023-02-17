import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components'

// import App from './01_内联样式的Css/App'
// import App from './02_普通css的写法/App'
// import App from './03_Css-Modules/App'
// import App from './04_Less编写方式/App'
// import App from './05_CSS-in-js写法/App'
import App from './06_classnames库使用/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={{primaryColor:'#1890ef',primarySize:'14px'}}>
        <App />
    </ThemeProvider>
);

