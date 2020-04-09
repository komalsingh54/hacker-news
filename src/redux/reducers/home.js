
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
  if (process.env.IS_HN_SERVICE_ENABLED === 'false') {
    // const upVotedFeeds = getCachedItem('upVotes');
    // const deletedFeeds = getCachedItem();
    /* data.map((feed) => {

    }) */
  }
  return data;
}

function removeFeed(state, action) {
  const { objectID } = action;

  if (process.env.IS_HN_SERVICE_ENABLED === 'false') {
    const deletedFeeds = getCachedItem('deletedFeeds');
    if (deletedFeeds) {
      deletedFeeds.push(objectID);
      setIteminCache('upVotes', deletedFeeds);
    } else {
      setIteminCache('upVotes', [...deletedFeeds, objectID]);
    }
  }
  return state.filter((feed) => feed.objectID !== objectID);
}

function upvoteFeed(state, action) {
  const { objectID } = action;
  return state.map((feed) => {
    if (feed.objectID === objectID) {
      if (process.env.IS_HN_SERVICE_ENABLED === 'false') {
        const upvotes = getCachedItem('upVotes');

        if (upvotes) {
          upvotes.push({ objectID, points: feed.points + 1, hasVoted: true });
          setIteminCache('upVotes', upvotes);
        } else {
          setIteminCache('upVotes', [{ objectID, points: feed.points + 1, hasVoted: true }]);
        }
      }
      return { ...feed, points: feed.points + 1, hasVoted: true };
    }
    return feed;
  });
}
