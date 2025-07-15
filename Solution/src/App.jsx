import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { URLProvider } from "./context/URLContext";
import CreateShortURL from "./components/CreateShortURL";
import Analytics from "./components/Analytics";
import RedirectHandler from "./components/RedirectHandler";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box
} from "@mui/material";

function App() {
  return (
    <URLProvider>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              URL Shortener
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Create
            </Button>
            <Button color="inherit" component={Link} to="/analytics">
              Analytics
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ minHeight: 'calc(100vh - 64px)', background: '#f5f5f5' }}>
          <Routes>
            <Route path="/" element={<CreateShortURL />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/s/:shortcode" element={<RedirectHandler />} />
          </Routes>
        </Box>
      </Router>
    </URLProvider>
  );
}

export default App;
