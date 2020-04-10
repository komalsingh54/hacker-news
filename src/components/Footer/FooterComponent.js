/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getFeeds } from '../../redux/actions/home';
import { getQuery } from '../../helper/utility';

const FooterComponent = (props) => {
  const { history } = props;
  const location = useLocation().search;
  const dispatch = useDispatch();


  return (
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
                    dispatch(getFeeds({ filterBy: 'search_by_date', pageNo }));
                  } else {
                    history.push({ search: `?filterBy=search&pageNo=${pageNo}` });
                    dispatch(getFeeds({ filterBy: 'search', pageNo }));
                  }
                }}
              >
                More
              </a>
          </li>
        </ul>
      </td>
    </tr>

  );
};

export default FooterComponent;
