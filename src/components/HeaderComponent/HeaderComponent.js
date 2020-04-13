/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getFeeds } from '../../redux/actions/home';
import { getQuery } from '../../helper/utility';

const HeaderComponent = (props) => {
  const { history } = props;
  const location = useLocation().search;
  const dispatch = useDispatch();

  let [flag, setFlag] = useState(true);


  return (
    <tr>
      <td colSpan="5" className="p-d-o">
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
                    getFeeds({ filterBy: 'search', pageNo, numericFilters: 'points>0' })
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
                  dispatch(getFeeds({ filterBy: 'search_by_date', pageNo }));
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

  );
};

export default HeaderComponent;
