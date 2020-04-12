import TYPE, { types } from '../types/home';
import { getCachedItem, setIteminCache } from '../../helper/utility';

export default function (state = null, action) {
  switch (action.type) {
    case TYPE.RES_DATA:
      return resData(state, action);
    case TYPE.REMOVE_FEED:
      return removeFeed(state, action);
    case TYPE.UPVOTE_FEED:
      return upvoteFeed(state, action);
    case TYPE.ERROR:
      return updateError(state, action);
    default:
      return state;
  }
}

function resData(state, action) {
  const { data } = action;
  try {
    if (types.IS_HN_SERVICE_ENABLED === false) {
      const upVotedFeeds = getCachedItem('upVotes');
      const deletedFeeds = getCachedItem('deletedFeeds');
      const filteredData = data.filter((feed) => {
        const deletedFeedFound = deletedFeeds.find((u) => u === feed.objectID);
        if (deletedFeedFound) return false;
        return true;
      });
      return filteredData.map((feed) => {
        const upvotedFeedFound = upVotedFeeds.find(
          (u) => u.objectID === feed.objectID
        );
        if (upvotedFeedFound) return { ...feed, ...upvotedFeedFound };
        return feed;
      });
    }
    return data;
  } catch (error) {
    return data;
  }
}

function removeFeed(state, action) {
  const { objectID } = action;

  if (types.IS_HN_SERVICE_ENABLED === false) {
    const deletedFeeds = getCachedItem('deletedFeeds');
    if (deletedFeeds) {
      deletedFeeds.push(objectID);
      setIteminCache('deletedFeeds', deletedFeeds);
    } else {
      setIteminCache('deletedFeeds', [objectID]);
    }
  }
  return state.filter((feed) => feed.objectID !== objectID);
}

function upvoteFeed(state, action) {
  const { objectID } = action;
  return state.map((feed) => {
    if (feed.objectID === objectID) {
      if (types.IS_HN_SERVICE_ENABLED === false) {
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

function updateError(state, action) {
  return { ...state, error: action.data };
}
