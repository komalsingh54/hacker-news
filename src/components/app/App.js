/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import AlertComponent from '../AlertComponent/AlertComponent';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const hasError = useSelector((state) => state.error);

  const [shouldAlert, setShouldAlert] = useState(hasError);
  const [alertMessage, setAlertMessage] = useState('');


  return (
    <div className="container m-t-0"><heading />
      <AlertComponent
        message="Something went wrong"
        shouldAlert={shouldAlert}
        onClose={() => {
          setAlertMessage('');
          setShouldAlert(false);
        }}
      />{children}
    </div>
  );
};

export default App;
