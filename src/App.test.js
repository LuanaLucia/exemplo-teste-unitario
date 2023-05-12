import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Input from './Input';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renderizar Input e validar useState', () =>{
  const placeholderText = "Digite Aqui"
  render(<Input />);
  const input = screen.getByPlaceholderText(placeholderText);
  expect(input).toBeInTheDocument();

  fireEvent.change(input, {target: {value: "Teste"}})
  expect(input.value).toBe("Teste")

  const span = screen.getByText(/Eu digitei/);
  expect(span).toHaveTextContent('Eu digitei isso: Teste')

  

} );