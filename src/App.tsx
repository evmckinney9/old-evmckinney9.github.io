import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Layout from "./components/Layout";

function App() {
  // define theme

  const theme = createTheme({
    palette: {
      mode: "dark"
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;