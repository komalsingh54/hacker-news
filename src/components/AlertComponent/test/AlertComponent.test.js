// AlertComponent.test.js
import React from 'react';
import {cleanup, waitFor, render} from '@testing-library/react';

import AlertComponent from '../AlertComponent';

afterEach(cleanup);

test('Alert Component ', async () => {
  const message = 'test';
  const shouldAlert = true;
  const onClose = jest.fn();
  

  const component = render(
    <AlertComponent message={message} shouldAlert={shouldAlert} onClose={onClose} />,
  );
  await waitFor(() => expect(component.findAllByText(/Alert/i)).toBeTruthy())
  await waitFor(() => expect(component.findAllByText(message)).toBeTruthy());
});
