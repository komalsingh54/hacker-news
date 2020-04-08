import React from 'react';

import './App.scss';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default App;
