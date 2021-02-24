import React from "react"
import { Box, InputGroup, Input, InputLeftElement, Heading } from "@chakra-ui/react"
import SearchIcon from "./SearchIcon";
import AdvertIcon from "./AdvertIcon";

const Sidebar=(props)=>{
    return(
        <Box
            w="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            pt="2"
            pr="12"
            pl="8"
            >
            <InputGroup 
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignContent="center"
                alignItems="center"
                bg="#EBEEF0"
                h="2.4em" style={{borderRadius: "24px", border: "none"}}>
              <InputLeftElement
                ml="2"
                pointerEvents="none"
                children={<SearchIcon color="#757083"/>}
              />
              <Input h="2.4em" placeholder="Search Twitter" bg="#EBEEF0" size="lg" style={{border: "none", backgroundColor: "#EBEEF0", borderRadius: "24px"}} />
            </InputGroup>
            
            <Box
                h="35em"
                bg="#F7F9FA"
                w="100%"
                mt="4"
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignContent="center"
                alignItems="flex-start"
                style={{borderRadius: "20px"}}
                
                >
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                    alignContent="center"
                    alignItems="center"
                    mb="3"
                    >
                    <Heading 
                        pr="4"
                        pt="3"
                        pl="4"
                        as="h5" size="md" fontWeight="bold">
                        What's happening
                    </Heading>
                    
                </Box>
                <Box 
                    borderBottomColor="#EBEEF0"
                    borderBottomWidth="1.5px"
                    w="100%"
                />
                <Box
                    borderBottomColor="#EBEEF0"
                    borderBottomWidth="1.5px"
                    w="100%"
                    h="6em"
                    _hover={{
                        backgroundColor: "#F2F2F2",
                        cursor: "pointer"
                    }}
                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="flex-start"
                            alignContent="center"
                            alignItems="center"
                            pl="4"
                            pr="4"
                            pt="2"
                            >
                                <span style={{fontSize: "14px", marginRight: "5px", color: "#757083"}}>
                                    Premier League
                                </span>
                                <span style={{fontSize: "14px", marginRight: "5px", color: "#757083"}}>
                                    &#183;
                                </span>
                                <span style={{fontSize: "14px", marginRight: "5px", color: "#757083"}}>
                                    This Afternoon
                                </span>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="flex-start"
                            alignContent="center"
                            alignItems="center"
                            pl="4"
                            pr="4"
                            pt="2"
                            >
                                <Heading 
                                    as="h7" 
                                    size="xs" 
                                    fontWeight="bold">
                                    Leeds United VS Southhampton
                                </Heading>
                        </Box>



                </Box>



                <Box
                    borderBottomColor="#EBEEF0"
                    borderBottomWidth="1.5px"
                    w="100%"
                    h="7.5em"
                    _hover={{
                        backgroundColor: "#F2F2F2",
                        cursor: "pointer"
                    }}
                    >

                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="flex-start"
                            alignContent="center"
                            alignItems="center"
                            pl="4"
                            pr="4"
                            pt="2"
                            >
                                <Heading 
                                    as="h6" 
                                    size="sm" 
                                    fontWeight="bold">
                                    #TakeoutTuesday
                                </Heading>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="flex-start"
                            alignContent="center"
                            alignItems="center"
                            pl="4"
                            pr="4"
                            pt="2"
                            >
                                <span style={{fontSize: "15px", marginRight: "5px", color: "#757083"}}>
                                Order in with American Express. Help Out. #TakeoutTuesday #ShopSmall
                                </span>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="flex-start"
                            alignContent="center"
                            alignItems="center"
                            pl="4"
                            pr="4"
                            pt="2"
                            >
                                <Box 
                                    display="flex"
                                    flexDirection="row"
                                    justifyContent="flex-start"
                                    alignContent="center"
                                    alignItems="center"
                                    style={{fontSize: "14px", marginRight: "5px", color: "#757083"}}>
                                <AdvertIcon color="#5B7083" style={{marginRight: "4px"}} />Promoted by American Express
                                </Box>
                            </Box>



                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar;