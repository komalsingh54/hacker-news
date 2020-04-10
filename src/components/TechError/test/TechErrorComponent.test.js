// AlertComponent.test.js
import React from 'react';
import {cleanup, waitFor, render} from '@testing-library/react';

import TechErrorComponent from '../TechErrorComponent';

afterEach(cleanup);

test('NotFound Component ', async () => {
  const component = render(
    <TechErrorComponent />,
  );
  await waitFor(() => expect(component.findAllByText(/Oops! Somthing went wrong.../i)).toBeTruthy())
  await waitFor(() => expect(component.findAllByText(/we are sorry, you can redirect to home page./i)).toBeTruthy());
  await waitFor(() => expect(component.findAllByText(/Home./i)).toBeTruthy());
  await waitFor(() => expect(component.getByText('Home').click()))
});
