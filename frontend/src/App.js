import React from "react"
import { Box, propNames } from "@chakra-ui/react"
import './App.css';
import Sidebar from "./components/Sidebar";
import SideNav from "./components/SideNav";
import Content from "./components/Content";

function App(props) {
  return (
    <Box
      w="100%"
      minHeight="100%"
      display="inline-flex"
      justifyContent="center"
      position="relative"
      >
      <Box
        w={["20%", "20%", "15%", "23%", "23%"]}
        h="100vh"
        borderRightColor="#F2F2F2"
        borderRightWidth="1.5px"
        top="0"
        left="0"
        position="fixed"
        >
        <SideNav />
      </Box>
      <Box
        w={["80%", "80%", "85%", "45%", "45%"]}
        minHeight="100vh"
        position="absolute"
        left={["20%", "20%", "15%", "23%", "23%"]}
        >
        <Content subs={props.children}/>
      </Box>
      <Box
        w={["0%", "0%", "0%", "32%", "32%"]}
        display={["none", "none", "none", "flex", "flex"]}
        minHeight="100vh"
        borderLeftColor="#F2F2F2"
        borderLeftWidth="1.5px"
        bottom="0"
        right="0"
        position="fixed"
        >
        <Sidebar />
      </Box>
    </Box>
  );
}

export default App;
