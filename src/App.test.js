import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

const Button = ({ label, onClick }) => {
  return <button onClick={onClick} aria-label='my-button' testid="my-button" type="submit">{label}</button>
}

test("precisa adicionar botão no documento", () => {
  // let calledFlag = false;
  // const onClick = () => {
  //   calledFlag = true;
  // }

  const onClick = jest.fn()

  // query vai pesquisar elemento
  const { getByLabelText, queryByLabelText } = render(<Button label="MyButton" onClick={onClick} />);

  const btnEl = getByLabelText("my-button")
  fireEvent.click(btnEl);

  // expect(calledFlag).toBeTruthy();
  // expect(calledFlag).toBe(true);
  expect(onClick).toHaveBeenCalled();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("MyButton");
  expect(btnEl).toHaveAttribute('type', 'submit');
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
