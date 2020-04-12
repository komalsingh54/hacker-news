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

export const getColor = (perc) => {
  let red;
  let green;
  const blue = 0;
  if (perc < 50) {
    red = 255;
    green = Math.round(5.1 * perc);
  } else {
    green = 255;
    red = Math.round(510 - 5.10 * perc);
  }
  const h = red * 0x10000 + green * 0x100 + blue * 0x1;
  return `#${(`000000${h.toString(16)}`).slice(-6)}`;
};
