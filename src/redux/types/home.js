import prefixer from './prefixer';

const prefix = '@@homeTypes';

export const types = {
  REQ_DATA: null,
  RES_DATA: null,
  FAIL_DATA: null,
  REMOVE_FEED: null,
  UPVOTE_FEED: null,
  ERROR: false,
  IS_HN_SERVICE_ENABLED: false,
};

export default prefixer(types, prefix);
