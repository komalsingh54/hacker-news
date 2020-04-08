import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import url from 'url';

import './Home.scss';
import { getData, removeFeed, upvoteFeed } from '../../redux/actions/home';
import { timeSince } from '../../helper/utility';


const Home = () => {
  const homeData = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!homeData) dispatch(getData());
  }, [dispatch, homeData]);

  const renderNews = (news) => news.map((item) => (
    <tr key={item.objectID}>
      <td>{item.num_comments}</td>
      <td>{item.points}</td>
      <td><span type="button" className="caret" onClick={() => dispatch(upvoteFeed(item.objectID))} /></td>
      <td>{item.title}</td>
      <td>
        {item.url && (
        <a href={item.url}>
          (
          {url.parse(item.url).hostname}
          )
        </a>
        )}
      </td>
      <td>{item.author ? `by ${item.author}` : ''}</td>
      <td>{item.created_at && timeSince(new Date(item.created_at))}</td>
      <td>
        [
        <button type="button" onClick={() => dispatch(removeFeed(item.objectID))}>hide</button>
        ]
      </td>
    </tr>
  ));
  if (homeData) {
    return (
      <div className="row">
        <table className="table table-striped table-sm">
          <thead><tr><td>Hacker news</td></tr></thead>
          <tbody>
            {renderNews(homeData)}
            <tr>
              <td>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" onClick={() => dispatch(getData(1))}>More</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  return 'Loading.........';
};

export default Home;
