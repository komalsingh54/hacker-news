/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getFeeds } from '../../redux/actions/home';
import { getQuery } from '../../helper/utility';


const PaginationComponent = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const location = useLocation().search;

  return (
    <>
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
            dispatch(getFeeds({ filterBy: 'search_by_date', pageNo }));
          } else {
            history.push({ search: `?filterBy=search&pageNo=${pageNo}` });
            dispatch(getFeeds({ filterBy: 'search', pageNo }));
          }
        }}
      >
        More
      </a>
    </>
  );
};

export default PaginationComponent;
