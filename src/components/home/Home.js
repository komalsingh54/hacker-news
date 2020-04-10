/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import url from 'url';

import { getData, removeFeed, upvoteFeed } from '../../redux/actions/home';
import { timeSince, getQuery } from '../../helper/utility';

const Home = (props) => {
  const location = useLocation().search;
  const homeData = useSelector((state) => state.home);
  const dispatch = useDispatch();

  let [flag, setFlag] = useState(true);
  const { history } = props;

  useEffect(() => {
    if (!homeData) dispatch(getData());
  }, [dispatch, homeData]);

  const renderNews = (news) => news.map((item) => (
    <tr key={item.objectID}>
      <td className="right p-l-1">{item.num_comments ? item.num_comments : '-'}</td>
      <td className="right p-l-1">{item.points ? item.points : '-'}</td>
      <td>
        <button
          aria-label="upvote"
          type="button"
          className="point-button"
          onClick={() => {
            if (item.hasVoted) {
              // eslint-disable-next-line no-alert
              alert('You already Voted for this');
            } else {
              dispatch(upvoteFeed(item.objectID));
            }
          }}
        >
          <span className="caret" />
        </button>
      </td>
      <td>
        {item.title || item.story_title}{' '}
        {item.url && (
        <a href={item.url}>
          ({item.url ? url.parse(item.url).hostname
          : url.parse(item.story_url).hostname})
        </a>
        )}{' '}
        {item.author && (
        <>
          <span className="author-color">by</span>
          <span> {item.author}</span>
        </>
        )}
        {item.created_at && (
        <span className="time-stamp"> {timeSince(new Date(item.created_at))}</span>
        )}
      </td>
      <td>
        <span className="time-stamp">[</span>
        <button
          type="button"
          aria-label="hide"
          className="point-button"
          onClick={() => dispatch(removeFeed(item.objectID))}
        >
          hide
        </button>
        <span className="time-stamp">]</span>
      </td>
    </tr>
  ));

  if (homeData) {
    return (
      <div className="col-8 col-offset-3">
        <table className="table">
          <thead className="thead">
            <tr>
              <td colSpan="5">
                <div className="bg-red">
                  <ul>
                    <li>
                      <img src="favicon.ico" alt="logo" />
                    </li>
                    <li>
                      <button
                        aria-label="top"
                        className="point-button"
                        type="button"
                        onClick={() => {
                          const query = getQuery(location);
                          // eslint-disable-next-line react/prop-types
                          let pageNo = 1;
                          if (Object.prototype.hasOwnProperty.call(query, 'pageNo')) {
                            pageNo = parseInt(query.pageNo, 10) + 1;
                          }
                          history.push({
                            search: `?filterBy=search&pageNo=${pageNo}&numericFilters=points>0`,
                          });
                          setFlag((flag = true));
                          dispatch(
                            getData({ filterBy: 'search', pageNo, numericFilters: 'points>0' })
                          );
                        }}
                        disabled={flag}
                      >
                        top
                      </button>
                    </li>
                    <li>|</li>
                    <li>
                      <button
                        aria-label="new"
                        className="point-button"
                        type="button"
                        onClick={() => {
                          const query = getQuery(location);
                          // eslint-disable-next-line react/prop-types
                          let pageNo = 1;
                          if (Object.prototype.hasOwnProperty.call(query, 'pageNo')) {
                            pageNo = parseInt(query.pageNo, 10) + 1;
                          }
                          history.push({ search: `?filterBy=search_by_date&pageNo=${pageNo}` });
                          setFlag((flag = false));
                          dispatch(getData({ filterBy: 'search_by_date', pageNo }));
                        }}
                        disabled={!flag}
                      >
                        new
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {renderNews(homeData)}
            <tr>
              <td colSpan="8">
                <ul>
                  <li>
                    <span className="time-stamp">Filter By: </span>
                    {getQuery(location).filterBy === 'search_by_date' ? 'Latest' : 'Top Points'}
                  </li>
                  <li className="p-l-2">|</li>
                  <li className="p-l-2">
                    <span className="time-stamp">Page No: </span>
                    {getQuery(location).pageNo
                      ? +getQuery(location).pageNo + 1 : 1}
                  </li>
                  <li className="p-l-4">
                    {/* eslint-disable-next-line */}
                    <a
                      href="#"
                      onClick={() => {
                        const query = getQuery(location);
                        let pageNo = 1;
                        if (Object.prototype.hasOwnProperty.call(query, 'pageNo')) {
                          pageNo = parseInt(query.pageNo, 10) + 1;
                        }
                        if (
                          Object.prototype.hasOwnProperty.call(query, 'filterBy')
                          && query.filterBy === 'search_by_date'
                        ) {
                          history.push({ search: `?filterBy=search_by_date&pageNo=${pageNo}` });
                          dispatch(getData({ filterBy: 'search_by_date', pageNo }));
                        } else {
                          history.push({ search: `?filterBy=search&pageNo=${pageNo}` });
                          dispatch(getData({ filterBy: 'search', pageNo }));
                        }
                      }}
                    >
                      More
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  return <div id="loader" />;
};

export default Home;
