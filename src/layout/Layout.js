import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppBar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../theme";

export class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" sx={{backgroundColor: "rgba(0,0,0,0.85)"}}>
            <Toolbar>
              <Typography
                color="secondary"
                variant="h5"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                CompFlix
              </Typography>
              <IconButton size="large" aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
        <Box component="main">{this.props.children}</Box>
      </ThemeProvider>
    );
  }
}

// Wrap and export
export default function (props) {
  const navigation = useNavigate();

  return <Layout {...props} navigation={navigation} />;
}
