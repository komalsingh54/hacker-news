// AlertComponent.test.js
import React from 'react';
import {cleanup, waitFor, render} from '@testing-library/react';

import NotFound from '../NotFound';

afterEach(cleanup);

test('NotFound Component ', async () => {
  const component = render(
    <NotFound />,
  );
  await waitFor(() => expect(component.findAllByText(/we are sorry, but the page you requested was not found/i)).toBeTruthy())
  await waitFor(() => expect(component.findAllByText(/Oops! Page not found/i)).toBeTruthy());
});
