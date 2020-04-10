/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewsFeed from '../NewsFeed/NewsFeedComponent';
import FooterComponent from '../Footer/FooterComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';

import { getFeeds } from '../../redux/actions/home';


const Home = (props) => {
  const homeData = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const { history } = props;

  useEffect(() => {
    if (!homeData) dispatch(getFeeds());
  }, [dispatch, homeData]);

  const renderNews = (news) => news.map((item) => (<NewsFeed item={item} />));

  if (homeData && Array.isArray(homeData)) {
    return (
      <div className="col-8 col-offset-3">
        <table className="table">
          <thead className="thead">
            <HeaderComponent history={history} />
          </thead>
          <tbody>
            {renderNews(homeData)}
            <FooterComponent history={history} />
          </tbody>
        </table>
      </div>
    );
  }
  if (homeData) {
    history.push('/tech-error');
  }
  return <div id="loader" />;
};

export default Home;
