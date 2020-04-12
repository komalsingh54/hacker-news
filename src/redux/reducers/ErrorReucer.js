import TYPE from '../types/home';

export default function (state = false, action) {
  switch (action.type) {
    case TYPE.ERROR:
      return handelError(state, action);
    default:
      return state;
  }
}

function handelError(state, action) {
  return { ...state, error: action.data };
}
