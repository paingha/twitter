import React from "react"
import { Box, InputGroup, Input, InputLeftElement, Heading } from "@chakra-ui/react"
import SearchIcon from "./SearchIcon";
import AdvertIcon from "./AdvertIcon";
import MoreIcon from "./MoreIcon";
import useHover from "./UseHover"

const Sidebar=(props)=>{
    const [box11Ref, isBox11Hovered] = useHover();
    const [box2Ref, isBox2Hovered] = useHover();
    const [box3Ref, isBox3Hovered] = useHover();
    const [box4Ref, isBox4Hovered] = useHover();
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
            pr="6"
            pl="6"
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
                minHeight="38em"
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
                        Trends for you
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
                    minHeight="6em"
                    _hover={{
                        backgroundColor: "#F2F2F2",
                        cursor: "pointer"
                    }}
                    >
                        <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    w="100%"
                    h="auto"
                    pr="3"
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
                        flexDirection="column"
                        justifyContent="center"
                        alignContent="center"
                        alignItems="center"
                        w="30px"
                        h="30px"
                        mt={3}
                        _hover={{
                            backgroundColor: "rgba(29, 161, 242, 0.1)",
                            borderRadius: "30px",
                            color: "#1DA1F2"
                          }}
                        ref={box11Ref}
                        >
                            <MoreIcon color={isBox11Hovered? "#1DA1F2": "#757083"} />
                        </Box>
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
                    minHeight="7.5em"
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
                

                <Box
                    borderBottomColor="#EBEEF0"
                    borderBottomWidth="1.5px"
                    w="100%"
                    minHeight="6em"
                    _hover={{
                        backgroundColor: "#F2F2F2",
                        cursor: "pointer"
                    }}
                    >
                        <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    w="100%"
                    h="auto"
                    pr="3"
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
                                    Politics
                                </span>
                                <span style={{fontSize: "14px", marginRight: "5px", color: "#757083"}}>
                                    &#183;
                                </span>
                                <span style={{fontSize: "14px", marginRight: "5px", color: "#757083"}}>
                                    Trending
                                </span>
                        </Box>
                        <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignContent="center"
                        alignItems="center"
                        w="30px"
                        h="30px"
                        mt={3}
                        _hover={{
                            backgroundColor: "rgba(29, 161, 242, 0.1)",
                            borderRadius: "30px",
                            color: "#1DA1F2"
                          }}
                        ref={box2Ref}
                        >
                            <MoreIcon color={isBox2Hovered? "#1DA1F2": "#757083"} />
                        </Box>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="flex-start"
                            alignContent="center"
                            alignItems="center"
                            pl="4"
                            pr="4"
                            pt="0"
                            >
                                <Heading 
                                    as="h7" 
                                    size="xs" 
                                    fontWeight="bold">
                                    #MonthlyStimulusNOW
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
                            pt="1"
                            >
                        <span style={{fontSize: "14px", marginRight: "5px", color: "#757083"}}>
                                    6,757 Tweets
                                </span>
                        </Box>

                </Box>
                


                <Box
                    borderBottomColor="#EBEEF0"
                    borderBottomWidth="1.5px"
                    w="100%"
                    minHeight="6em"
                    _hover={{
                        backgroundColor: "#F2F2F2",
                        cursor: "pointer"
                    }}
                    >
                        <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    w="100%"
                    h="auto"
                    pr="3"
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
                                    Rap
                                </span>
                                <span style={{fontSize: "14px", marginRight: "5px", color: "#757083"}}>
                                    &#183;
                                </span>
                                <span style={{fontSize: "14px", marginRight: "5px", color: "#757083"}}>
                                    Trending
                                </span>
                        </Box>
                        <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignContent="center"
                        alignItems="center"
                        w="30px"
                        h="30px"
                        mt={3}
                        _hover={{
                            backgroundColor: "rgba(29, 161, 242, 0.1)",
                            borderRadius: "30px",
                            color: "#1DA1F2"
                          }}
                        ref={box3Ref}
                        >
                            <MoreIcon color={isBox3Hovered? "#1DA1F2": "#757083"} />
                        </Box>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="flex-start"
                            alignContent="center"
                            alignItems="center"
                            pl="4"
                            pr="4"
                            pt="0"
                            >
                                <Heading 
                                    as="h7" 
                                    size="xs" 
                                    fontWeight="bold">
                                    DaBaby
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
                            pt="1"
                            >
                        <span style={{fontSize: "14px", marginRight: "5px", color: "#757083"}}>
                                    8,063 Tweets
                                </span>
                        </Box>

                </Box>
                
                <Box
                    borderBottomColor="#EBEEF0"
                    borderBottomWidth="1.5px"
                    w="100%"
                    minHeight="6em"
                    _hover={{
                        backgroundColor: "#F2F2F2",
                        cursor: "pointer"
                    }}
                    >
                        <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    w="100%"
                    h="auto"
                    pr="3"
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
                                    Football
                                </span>
                                <span style={{fontSize: "14px", marginRight: "5px", color: "#757083"}}>
                                    &#183;
                                </span>
                                <span style={{fontSize: "14px", marginRight: "5px", color: "#757083"}}>
                                    Trending
                                </span>
                        </Box>
                        <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignContent="center"
                        alignItems="center"
                        w="30px"
                        h="30px"
                        mt={3}
                        _hover={{
                            backgroundColor: "rgba(29, 161, 242, 0.1)",
                            borderRadius: "30px",
                            color: "#1DA1F2"
                          }}
                        ref={box4Ref}
                        >
                            <MoreIcon color={isBox4Hovered? "#1DA1F2": "#757083"} />
                        </Box>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="flex-start"
                            alignContent="center"
                            alignItems="center"
                            pl="4"
                            pr="4"
                            pt="0"
                            >
                                <Heading 
                                    as="h7" 
                                    size="xs" 
                                    fontWeight="bold">
                                    Mendy
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
                            pt="1"
                            >
                        <span style={{fontSize: "14px", marginRight: "5px", color: "#757083"}}>
                                    8,063 Tweets
                                </span>
                        </Box>

                </Box>
                <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="flex-start"
                            alignContent="center"
                            alignItems="center"
                            pl="4"
                            pr="4"
                            w="100%"
                            h="3.3em"
                            style={{borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px"}}
                            _hover={{
                                backgroundColor: "#F2F2F2",
                                cursor: "pointer"
                            }}
                            >
                                <span style={{fontSize: "16px", marginRight: "5px", color: "#1DA1F2"}}>
                                    Show more
                                </span>
                                </Box>

            </Box>
        </Box>
    )
}

export default Sidebar;