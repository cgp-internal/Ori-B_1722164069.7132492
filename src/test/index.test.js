import React from 'react';
import { render } from '@testing-library/react';
import { AppTest } from './components/App.test';

describe('Main test suite for the application', () => {
  it('renders the App component', () => {
    const { getByText } = render(<AppTest />);
    expect(getByText('Note List')).toBeInTheDocument();
  });
});