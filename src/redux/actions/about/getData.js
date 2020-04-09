import TYPE from '../../types/about';

export default function getData(value) {
  return (dispatch) => {
    dispatch({ type: TYPE.REQ_DATA });

    return new Promise((resolve) => {
      dispatch({
        type: TYPE.RES_DATA,
        data: { text: value || 'This is some text for the ABOUT page fetched asynchronously' },
      });
      return resolve();
    });
  };
}
