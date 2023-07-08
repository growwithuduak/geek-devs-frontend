import React from 'react';
import { Button } from '../Button';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('Button Component', () => {
  it('renders button component with a label', () => {
    const { getByText } = render(<Button label="Hello World" />);
    expect(getByText('Hello World')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('renders the button with the label, default size and color', () => {
    const { getByText } = render(<Button label="Hello World" />);
    expect(getByText('Hello World')).toHaveClass(
      'textButton mediumButton primaryButton'
    );
  });
  it('renders the button with the label, custom size and color', () => {
    const { getByText } = render(
      <Button label="Hello World!" size="large" color="primary" />
    );
    expect(getByText('Hello World!')).toHaveClass(
      'textButton largeButton primaryButton'
    );
  });
});
