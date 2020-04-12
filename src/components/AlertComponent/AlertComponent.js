/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const AlertComponent = (props) => {
  const { message, shouldAlert, onClose } = props;
  function handleClick(event) {
    onClose(event.target.name); // pass any argument to the callback
  }
  return (
    <div id="Oops" className={shouldAlert ? 'overlay overlay-target' : 'overlay'}>
      <div className="popup">
        <h2>Alert</h2>
        <a className="close" href="#" onClick={handleClick}>&times;</a>
        <div className="content">
          {message}
        </div>
      </div>
    </div>
  );
};

export default AlertComponent;
