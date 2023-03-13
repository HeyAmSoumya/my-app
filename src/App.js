import React, { useState } from 'react'
import ClassCounter from './components/ClassCounter';
import FunctionCounter from './components/FunctionCounter';

export const ThemeContext = React.createContext();

function App() {
  // Set the theme here.. by using the setTheme...
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }} >
      <ClassCounter intialCounter={0} />
      <FunctionCounter intialCounter={0} />

      <button onClick={() => setTheme((prevValue) => prevValue === 'red' ? 'blue' : 'red')}>Toggle Theme</button>
    </ThemeContext.Provider>

  );
}

export default App;
