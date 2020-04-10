import React from 'react';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return <div className="container">{children}</div>;
};

export default App;
