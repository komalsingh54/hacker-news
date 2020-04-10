export const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years ago`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} months ago`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} days ago`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} hours ago`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} minutes ago`;
  }
  return `${Math.floor(seconds)} seconds ago`;
};

export const getCachedItem = (type) => JSON.parse(localStorage.getItem(type));

export const setIteminCache = (type, data) => localStorage.setItem(
  type, JSON.stringify(data)
);

export const getQuery = (location) => {
  const query = location.slice(1);
  if (!query) return {};
  const queryArray = query.split('&');
  const queryObj = {};
  if (queryArray.length === 0) return {};
  // eslint-disable-next-line array-callback-return
  queryArray.map((item) => {
    const search = item.split('=');
    if (search.length === 2) {
      // eslint-disable-next-line prefer-destructuring
      queryObj[search[0]] = search[1];
    }
  });
  return queryObj;
};
