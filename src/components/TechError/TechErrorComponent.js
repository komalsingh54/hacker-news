import React from 'react';

const TechErrorComponent = () => (
  <div id="notfound">
    <div className="notfound">
      <div className="notfound-404">
        <h3>Oops! Somthing went wrong...</h3>
        <h1><span>5</span><span>0</span><span>0</span></h1>
      </div>
      <h2>we are sorry, you can redirect to home page.</h2>
      <button
        className="home-btn"
        aria-label="tech-error"
        type="button"
        onClick={() => {
          window.location.href = '/';
        }}
      >Home
      </button>
    </div>
  </div>
);

export default TechErrorComponent;
