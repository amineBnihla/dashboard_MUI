import { ColorModeContext,useMode } from "./theme";
import { Box, CssBaseline,ThemeProvider } from "@mui/material";
import Topbar from './scenes/general/Topbar.jsx'
import Sidebar from './scenes/general/Sidebar.jsx'
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard/index.jsx";
import Team from "./scenes/Team/index.jsx";
import Contacts from "./scenes/contacts/index.jsx";
import { useState } from "react";
import Invoice from "./scenes/Invoice/index.jsx";
function App() {
 const [theme,colorMode] =useMode() 
  const [isActive,setIsActive] = useState(false)
  return (
 <ColorModeContext.Provider value={colorMode}>
  <ThemeProvider theme={theme}>
   <CssBaseline/>
   <div className="app">
    <Sidebar isActive={isActive} setIsActive={setIsActive} />
    <main className={"content "+(isActive ? 'active':'')}>
    <Topbar/>
    <Routes >
      <Route element={<Dashboard/>} path="/"/>
      <Route element={<Team/>} path="/team"/>
      <Route element={<Contacts/>} path="/contacts"/>
      <Route element={<Invoice/>} path="/invoices"/>
    </Routes>
    </main>
   </div>
  </ThemeProvider>
 </ColorModeContext.Provider>
  );
}

export default App;
