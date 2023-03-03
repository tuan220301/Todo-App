import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";

export const HeaderComponent = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        <Toolbar disableGutters>
          <Box display="flex" justifyContent="center" alignItems="center" textAlign="center">
            <h1>TO DO LIST</h1>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

