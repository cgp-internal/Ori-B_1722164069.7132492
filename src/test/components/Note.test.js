import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Note } from '../Note';

describe('Note component', () => {
  it('renders title, content and checkbox correctly', () => {
    const title = 'Test Note';
    const content = 'This is a test note';
    const done = false;
    const { getByText, getByRole } = render(<Note title={title} content={content} done={done} />);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(content)).toBeInTheDocument();
    expect(getByRole('checkbox')).not.toBeChecked();
  });

  it('calls checkbox change handler when clicked', () => {
    const title = 'Test Note';
    const content = 'This is a test note';
    const done = false;
    const onChange = jest.fn();
    const { getByRole } = render(<Note title={title} content={content} done={done} onChange={onChange} />);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});