import React from 'react';
import ReactDOM from 'react-dom';
import PhotoList from './src/shared/photos/PhotoList';

const render = (PhotoList) => {
  const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;
  renderMethod(
    <React.StrictMode>
      <PhotoList />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render(PhotoList);