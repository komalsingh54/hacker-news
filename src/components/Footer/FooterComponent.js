/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router-dom';

import PaginationComponent from '../PaginationComponent/PaginationComponent';
import { getQuery } from '../../helper/utility';

const FooterComponent = (props) => {
  const { history } = props;
  const location = useLocation().search;

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
            <PaginationComponent history={history} />
          </li>
        </ul>
      </td>
    </tr>

  );
};

export default FooterComponent;
