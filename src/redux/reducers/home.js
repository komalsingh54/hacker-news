import TYPE from '../types/home';
import { getCachedItem, setIteminCache } from '../../helper/utility';

export default function (state = null, action) {
  switch (action.type) {
    case TYPE.RES_DATA:
      return resData(state, action);
    case TYPE.REMOVE_FEED:
      return removeFeed(state, action);
    case TYPE.UPVOTE_FEED:
      return upvoteFeed(state, action);
    default:
      return state;
  }
}

function resData(state, action) {
  const { data } = action;
  console.log('*********************', process.env.IS_HN_SERVICE_ENABLED);
  data.map((feed) => {

  })
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
      const upvotes = getCachedItem('upVotes');

      if (upvotes) {
        upvotes.push({ objectID, points: feed.points + 1, hasVoted: true });
        setIteminCache('upVotes', upvotes);
      } else {
        setIteminCache('upVotes', [{ objectID, points: feed.points + 1, hasVoted: true }]);
      }

      return { ...feed, points: feed.points + 1, hasVoted: true };
    }
    return feed;
  });
}
