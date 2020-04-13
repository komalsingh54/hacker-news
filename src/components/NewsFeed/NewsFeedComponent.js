/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import url from 'url';

import AlertComponent from '../AlertComponent/AlertComponent';
import { removeFeed, upvoteFeed } from '../../redux/actions/home';
import { timeSince, getColor } from '../../helper/utility';


const NewsFeed = (props) => {
  const { item } = props;
  const [shouldAlert, setShouldAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const dispatch = useDispatch();

  return (
    <tr key={item.objectID}>
      <td className="right p-l-1">{item.num_comments ? item.num_comments : '-'}</td>
      <td className="right p-l-1" style={{ color: getColor(item.points) }}>{item.points ? item.points : '-'}</td>
      <td>
        <AlertComponent
          message={alertMessage}
          shouldAlert={shouldAlert}
          onClose={() => {
            setAlertMessage('');
            setShouldAlert(false);
          }}
        />
        <button
          aria-label="upvote"
          type="button"
          className="point-button"
          onClick={() => {
            if (item.hasVoted) {
              setAlertMessage(`You already voted - ${item.title || item.story_title}`);
              setShouldAlert(true);
            } else {
              dispatch(upvoteFeed(item.objectID));
            }
          }}
        >
          <span className="caret" />
        </button>
      </td>
      <td>
        {item.title || item.story_title || '[Title not available]'}{' '}
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
        <div className="inline-display">
          <span className="time-stamp">[</span>
          <button
            type="button"
            aria-label="hide"
            className="point-button no-padding"
            onClick={() => dispatch(removeFeed(item.objectID))}
          >
            hide
          </button>
          <span className="time-stamp">]</span>
        </div>

      </td>
    </tr>
  );
};

export default NewsFeed;
