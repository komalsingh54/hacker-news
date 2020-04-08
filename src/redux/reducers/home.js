import TYPE from '../types/home';

export default function (state = null, action) {
  switch (action.type) {
    case TYPE.RES_DATA: return resData(state, action);
    case TYPE.REMOVE_FEED: return removeFeed(state, action);
    case TYPE.UPVOTE_FEED: return upvoteFeed(state, action);
    default: return state;
  }
}

function resData(state, action) {
  const { data } = action;
  if (state) {
    return [...state, ...data];
  }
  return data;
}

function removeFeed(state, action) {
  const { objectID } = action;
  return state.filter((feed) => feed.objectID !== objectID);
}

function upvoteFeed(state, action) {
  const { objectID } = action;
  return state.map((feed) => {
    if (feed.objectID === objectID) {
      return { ...feed, points: feed.points + 1 };
    }
    return feed;
  });
}
