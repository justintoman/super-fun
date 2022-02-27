import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import App from './components/App';
import './styles/styles.css';

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('app')
);
