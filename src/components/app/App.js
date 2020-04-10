import React from 'react';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return <div className="container"><heading />{children}</div>;
};

export default App;
