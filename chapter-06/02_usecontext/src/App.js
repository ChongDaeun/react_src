import { useState } from 'react';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={"사용자"}>                   {/* 문자열 */}
      <ThemeContext.Provider value={{isDark, setIsDark}}>     {/* 객체 */}
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
