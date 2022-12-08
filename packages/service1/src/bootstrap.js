import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const mount = (el) => {
  ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_PATH}>
      <App />
    </BrowserRouter>,
    el
  );
};

// webpack 會自動把 process.env.NODE_ENV設定為 webpack config 的 mode
// 所以底下判斷如果是開發環境（webpack config 的 mode 是 development）
if (process.env.NODE_ENV === 'development') {
  // 考慮到容器專案可以客製化要用來放 service1 專案的 div id，所以開發環境使用自己的id即可
  const devRoot = document.getElementById('service1-root');
  devRoot && mount(devRoot);
} else {
  const node = document.createElement('div');
  document.body.appendChild(node);
  mount(node);
}

// 傳出cb，讓容器專案透過這個 cb 傳入 html element 即可在容器專案執行 service1 專案的程式
export { mount };
