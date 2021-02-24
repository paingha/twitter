import React from "react"
import { Box } from "@chakra-ui/react"
import './App.css';
import Sidebar from "./components/Sidebar";
import SideNav from "./components/SideNav";
import Content from "./components/Content";

function App() {
  return (
    <Box
      w="100%"
      minHeight="100%"
      display="flex"
      flexDirection="row"
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      >
      <Box
        w={["20%", "20%", "15%", "25%", "25%"]}
        h="100vh"
        borderRightColor="#F2F2F2"
        borderRightWidth="1.5px"
        >
        <SideNav />
      </Box>
      <Box
        w={["80%", "80%", "85%", "50%", "50%"]}
        minHeight="100vh"
        >
        <Content />
      </Box>
      <Box
        w={["0%", "0%", "0%", "35%", "35%"]}
        display={["none", "none", "none", "flex", "flex"]}
        minHeight="100vh"
        borderLeftColor="#F2F2F2"
        borderLeftWidth="1.5px"
        >
        <Sidebar />
      </Box>
    </Box>
  );
}

export default App;
