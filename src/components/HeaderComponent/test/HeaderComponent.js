// AlertComponent.test.js
import React from 'react';
import { cleanup, waitFor, render } from '@testing-library/react';

import HeaderComponent from '../HeaderComponent';

afterEach(cleanup);
const history = jest
test('Header Component ', async () => {
  const component = render(
    <HeaderComponent />,
  );
  await waitFor(() => expect(component.findAllByText(/Alert/i)).toBeTruthy())
  await waitFor(() => expect(component.findAllByText(message)).toBeTruthy());
});
