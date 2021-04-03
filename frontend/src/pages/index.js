import React from "react"
import { Box, Heading, Textarea, Button } from "@chakra-ui/react"
import ImageIcon from "../components/ImageIcon"
import GifIcon from "../components/GifIcon"
import PollIcon from "../components/PollIcon"
import SmileIcon from "../components/SmileIcon"
import CalendarIcon from "../components/CalendarIcon"
import MoreIcon from "../components/MoreIcon"
import CommentIcon from "../components/CommentIcon"
import RetweetIcon from "../components/RetweetIcon"
import HeartIcon from "../components/HeartIcon"
import ShareIcon from "../components/ShareIcon"

const Index=(props)=>{
    return(
        <Box
            w="100%"
            minHeight="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
            justifyItems="center"
            >
            <Box
                w="100%"
                minHeight="7.8em"
                borderRightWidth="0px"
                borderLeftWidth="0px"
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignContent="center"
                justifyItems="center"
                alignItems="flex-start"
                pl={["2", "3"]}
                pr="2"
                pt="2"
                borderBottomColor="#F2F2F2"
                borderBottomWidth="1.5px"
                >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignContent="center"
                    justifyItems="center"
                    alignItems="center"
                    w="10%"
                    >
                        <img style={{borderRadius: "50%"}} src="https://pbs.twimg.com/profile_images/1348861517664555010/-FBxJ5h8_normal.jpg" />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignContent="center"
                    justifyItems="center"
                    alignItems="center"
                    w="95%"
                    height="auto"
                    >
                    <Textarea pl={2} fontSize="20px" minHeight="3em" w="100%" size="lg" style={{border: "none", resize: "none"}} bg="#FFFFFF" placeholder="What's happening?" 
                        _active={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none"
                        }}
                        _focus={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none"
                        }}
                        />
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        w="95%"
                        height="auto"
                        ml={-4}
                        mt={1}
                        >
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="flex-start"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            w={["50%", "50%", "42%", "42%", "42%"]}
                            height="auto"
                            >
                            <Box
                                display="flex"
                                flexDirection="row"
                                justifyContent="center"
                                alignContent="center"
                                justifyItems="center"
                                alignItems="center"
                                w="40px"
                                h="40px"
                                mr="0"
                                _hover={{
                                    backgroundColor: "rgba(29, 161, 242, 0.1)",
                                    borderRadius: "100%",
                                    color: "#1DA1F2"
                                  }}
                                >
                                <ImageIcon className="tweet-icon" color="rgba(29,161,242,1.00)" />
                            </Box>
                            <Box
                                display="flex"
                                flexDirection="row"
                                justifyContent="center"
                                alignContent="center"
                                justifyItems="center"
                                alignItems="center"
                                w="40px"
                                h="40px"
                                mr="0"
                                _hover={{
                                    backgroundColor: "rgba(29, 161, 242, 0.1)",
                                    borderRadius: "100%",
                                    color: "#1DA1F2"
                                  }}
                                >
                                <GifIcon className="tweet-icon" color="rgba(29,161,242,1.00)" />
                            </Box>
                            <Box
                                display="flex"
                                flexDirection="row"
                                justifyContent="center"
                                alignContent="center"
                                justifyItems="center"
                                alignItems="center"
                                w="40px"
                                h="40px"
                                mr="0"
                                _hover={{
                                    backgroundColor: "rgba(29, 161, 242, 0.1)",
                                    borderRadius: "100%",
                                    color: "#1DA1F2"
                                  }}
                                >
                                <PollIcon className="tweet-icon" color="rgba(29,161,242,1.00)" />
                            </Box>
                            <Box
                                display="flex"
                                flexDirection="row"
                                justifyContent="center"
                                alignContent="center"
                                justifyItems="center"
                                alignItems="center"
                                w="40px"
                                h="40px"
                                mr="0"
                                _hover={{
                                    backgroundColor: "rgba(29, 161, 242, 0.1)",
                                    borderRadius: "100%",
                                    color: "#1DA1F2"
                                  }}
                                >
                            <SmileIcon className="tweet-icon" color="rgba(29,161,242,1.00)" />
                            </Box>
                            <Box
                                display="flex"
                                flexDirection="row"
                                justifyContent="center"
                                alignContent="center"
                                justifyItems="center"
                                alignItems="center"
                                w={["40px", "40px", "40px", "40px", "40px"]}
                                h="40px"
                                mr="0"
                                _hover={{
                                    backgroundColor: "rgba(29, 161, 242, 0.1)",
                                    borderRadius: "100%",
                                    color: "#1DA1F2"
                                  }}
                                >
                            <CalendarIcon className="tweet-icon" color="rgba(29,161,242,1.00)" />
                            </Box>
                        </Box>
                        <Button display={["block", "block", "block", "block", "block"]} boxShadow="sm" backgroundColor="#1DA1F2" color="#ffffff" width={["25%", "25%", "25%", "25%", "18%"]} height="38px" borderRadius={["25px", "25px", "25px", "25px", "25px"]}>
                          Tweet
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box
                w="100%"
                h="10px"
                backgroundColor="#F7F9FA"
                >

            </Box>
            <Box
                borderTopColor="#F2F2F2"
                borderTopWidth="1.8px"
            />




            
            <Box
                w="100%"
                minHeight="8.5em"
                borderRightWidth="0px"
                borderLeftWidth="0px"
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignContent="center"
                justifyItems="center"
                alignItems="flex-start"
                pl={["2", "3"]}
                pr="0"
                pt="3"
                pb="4"
                mt="-1"
                borderBottomColor="#F2F2F2"
                borderBottomWidth="1.5px"
                _hover={{
                    backgroundColor: "#F2F2F2",
                    cursor: "pointer"
                }}
                >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignContent="center"
                    justifyItems="center"
                    alignItems="center"
                    w="10%"
                    >
                        <img style={{borderRadius: "50%"}} src="https://pbs.twimg.com/profile_images/1348861517664555010/-FBxJ5h8_normal.jpg" />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignContent="center"
                    justifyItems="center"
                    alignItems="center"
                    w="95%"
                    height="auto"
                    >
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        w="95%"
                        height="auto"
                        ml="0"
                        mb={2}
                        >
                        <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-start"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        w="99%"
                        height="auto"
                        >
                        <Heading as="h6" size="sm" mr={1}>
                          Joe Alagoa
                        </Heading>
                        <Box mr={2} color="#757083" fontWeight="400" >@painghajnr</Box>
                        <Box mr={2} color="#757083" fontWeight="400" >&#183;</Box>
                        <Box mr={2} color="#757083" fontWeight="400" >20m</Box>
                    </Box>
                    <MoreIcon color="#757083" />
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        w="92%"
                        height="auto"
                        ml={-2}
                        mt={1}
                        >
                        <img style={{borderRadius: 18}} src="https://www.gardeningknowhow.com/wp-content/uploads/2019/08/flower-color.jpg" />
                    </Box>
                    <Box
                        w="95%"
                        h="1.5em"
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        mt="3"
                        >
                        <Box
                            w="8%"
                            h="auto"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            >
                            <CommentIcon color="#757083"/>
                            <Box color="#757083">1</Box>
                        </Box>
                        <Box
                            w="8%"
                            h="auto"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            >
                            <RetweetIcon color="#757083"/>
                            <Box color="#757083">4</Box>
                        </Box>
                        <Box
                            w="8%"
                            h="auto"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            >
                            <HeartIcon color="#757083"/>
                            <Box color="#757083">2</Box>
                        </Box>
                        <ShareIcon color="#757083"/>
                        <span></span>
                    </Box>
                </Box>
            </Box>
            
                
            <Box
                w="100%"
                minHeight="8.5em"
                borderRightWidth="0px"
                borderLeftWidth="0px"
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignContent="center"
                justifyItems="center"
                alignItems="flex-start"
                pl={["2", "3"]}
                pr="0"
                pt="3"
                pb="4"
                mt="-1"
                borderBottomColor="#F2F2F2"
                borderBottomWidth="1.5px"
                _hover={{
                    backgroundColor: "#F2F2F2",
                    cursor: "pointer"
                }}
                >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignContent="center"
                    justifyItems="center"
                    alignItems="center"
                    w="10%"
                    >
                        <img style={{borderRadius: "50%"}} src="https://pbs.twimg.com/profile_images/1348861517664555010/-FBxJ5h8_normal.jpg" />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignContent="center"
                    justifyItems="center"
                    alignItems="center"
                    w="95%"
                    height="auto"
                    >
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        w="95%"
                        height="auto"
                        ml="0"
                        mb={2}
                        >
                        <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-start"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        w="99%"
                        height="auto"
                        >
                        <Heading as="h6" size="sm" mr={1}>
                          Joe Alagoa
                        </Heading>
                        <Box mr={2} color="#757083" fontWeight="400" >@painghajnr</Box>
                        <Box mr={2} color="#757083" fontWeight="400" >&#183;</Box>
                        <Box mr={2} color="#757083" fontWeight="400" >20m</Box>
                    </Box>
                    <MoreIcon color="#757083" />
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        w="92%"
                        height="auto"
                        ml={-2}
                        mt={1}
                        >
                        <img style={{borderRadius: 18}} src="https://www.gardeningknowhow.com/wp-content/uploads/2019/08/flower-color.jpg" />
                    </Box>
                    <Box
                        w="95%"
                        h="1.5em"
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        mt="3"
                        >
                        <Box
                            w="8%"
                            h="auto"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            >
                            <CommentIcon color="#757083"/>
                            <Box color="#757083">1</Box>
                        </Box>
                        <Box
                            w="8%"
                            h="auto"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            >
                            <RetweetIcon color="#757083"/>
                            <Box color="#757083">4</Box>
                        </Box>
                        <Box
                            w="8%"
                            h="auto"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            >
                            <HeartIcon color="#757083"/>
                            <Box color="#757083">2</Box>
                        </Box>
                        <ShareIcon color="#757083"/>
                        <span></span>
                    </Box>
                </Box>
            </Box>
          

            <Box
                w="100%"
                minHeight="8.5em"
                borderRightWidth="0px"
                borderLeftWidth="0px"
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignContent="center"
                justifyItems="center"
                alignItems="flex-start"
                pl={["2", "3"]}
                pr="0"
                pt="3"
                pb="4"
                mt="-1"
                borderBottomColor="#F2F2F2"
                borderBottomWidth="1.5px"
                _hover={{
                    backgroundColor: "#F2F2F2",
                    cursor: "pointer"
                }}
                >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignContent="center"
                    justifyItems="center"
                    alignItems="center"
                    w="10%"
                    >
                        <img style={{borderRadius: "50%"}} src="https://pbs.twimg.com/profile_images/1348861517664555010/-FBxJ5h8_normal.jpg" />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignContent="center"
                    justifyItems="center"
                    alignItems="center"
                    w="95%"
                    height="auto"
                    >
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        w="95%"
                        height="auto"
                        ml="0"
                        mb={2}
                        >
                        <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-start"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        w="99%"
                        height="auto"
                        >
                        <Heading as="h6" size="sm" mr={1}>
                          Joe Alagoa
                        </Heading>
                        <Box mr={2} color="#757083" fontWeight="400" >@painghajnr</Box>
                        <Box mr={2} color="#757083" fontWeight="400" >&#183;</Box>
                        <Box mr={2} color="#757083" fontWeight="400" >20m</Box>
                    </Box>
                    <MoreIcon color="#757083" />
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        w="92%"
                        height="auto"
                        ml={-2}
                        mt={1}
                        >
                        <img style={{borderRadius: 18}} src="https://www.gardeningknowhow.com/wp-content/uploads/2019/08/flower-color.jpg" />
                    </Box>
                    <Box
                        w="95%"
                        h="1.5em"
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        mt="3"
                        >
                        <Box
                            w="8%"
                            h="auto"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            >
                            <CommentIcon color="#757083"/>
                            <Box color="#757083">1</Box>
                        </Box>
                        <Box
                            w="8%"
                            h="auto"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            >
                            <RetweetIcon color="#757083"/>
                            <Box color="#757083">4</Box>
                        </Box>
                        <Box
                            w="8%"
                            h="auto"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            >
                            <HeartIcon color="#757083"/>
                            <Box color="#757083">2</Box>
                        </Box>
                        <ShareIcon color="#757083"/>
                        <span></span>
                    </Box>
                </Box>
            </Box>
          


            <Box
                w="100%"
                minHeight="8.5em"
                borderRightWidth="0px"
                borderLeftWidth="0px"
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignContent="center"
                justifyItems="center"
                alignItems="flex-start"
                pl={["2", "3"]}
                pr="0"
                pt="3"
                pb="4"
                mt="-1"
                borderBottomColor="#F2F2F2"
                borderBottomWidth="1.5px"
                _hover={{
                    backgroundColor: "#F2F2F2",
                    cursor: "pointer"
                }}
                >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignContent="center"
                    justifyItems="center"
                    alignItems="center"
                    w="10%"
                    >
                        <img style={{borderRadius: "50%"}} src="https://pbs.twimg.com/profile_images/1348861517664555010/-FBxJ5h8_normal.jpg" />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignContent="center"
                    justifyItems="center"
                    alignItems="center"
                    w="95%"
                    height="auto"
                    >
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        w="95%"
                        height="auto"
                        ml="0"
                        mb={2}
                        >
                        <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-start"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        w="99%"
                        height="auto"
                        >
                        <Heading as="h6" size="sm" mr={1}>
                          Joe Alagoa
                        </Heading>
                        <Box mr={2} color="#757083" fontWeight="400" >@painghajnr</Box>
                        <Box mr={2} color="#757083" fontWeight="400" >&#183;</Box>
                        <Box mr={2} color="#757083" fontWeight="400" >20m</Box>
                    </Box>
                    <MoreIcon color="#757083" />
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignContent="flex-start"
                        justifyItems="flex-start"
                        alignItems="flex-start"
                        w="92%"
                        height="auto"
                        ml={-2}
                        mt={1}
                        >
                        <p style={{marginBottom: "15px"}}>Vacation during a pandemic</p>
                        <img style={{borderRadius: 18}} src="https://www.gardeningknowhow.com/wp-content/uploads/2019/08/flower-color.jpg" />
                    </Box>
                    <Box
                        w="95%"
                        h="1.5em"
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        mt="3"
                        >
                        <Box
                            w="8%"
                            h="auto"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            >
                            <CommentIcon color="#757083"/>
                            <Box color="#757083">1</Box>
                        </Box>
                        <Box
                            w="8%"
                            h="auto"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            >
                            <RetweetIcon color="#757083"/>
                            <Box color="#757083">4</Box>
                        </Box>
                        <Box
                            w="8%"
                            h="auto"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            >
                            <HeartIcon color="#757083"/>
                            <Box color="#757083">2</Box>
                        </Box>
                        <ShareIcon color="#757083"/>
                        <span></span>
                    </Box>
                </Box>
            </Box>
          


            <Box
                w="100%"
                minHeight="8.5em"
                borderRightWidth="0px"
                borderLeftWidth="0px"
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignContent="center"
                justifyItems="center"
                alignItems="flex-start"
                pl={["2", "3"]}
                pr="0"
                pt="3"
                pb="4"
                mt="-1"
                borderBottomColor="#F2F2F2"
                borderBottomWidth="1.5px"
                _hover={{
                    backgroundColor: "#F2F2F2",
                    cursor: "pointer"
                }}
                >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignContent="center"
                    justifyItems="center"
                    alignItems="center"
                    w="10%"
                    >
                        <img style={{borderRadius: "50%"}} src="https://pbs.twimg.com/profile_images/1348861517664555010/-FBxJ5h8_normal.jpg" />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignContent="center"
                    justifyItems="center"
                    alignItems="center"
                    w="95%"
                    height="auto"
                    >
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        w="95%"
                        height="auto"
                        ml="0"
                        mb={2}
                        >
                        <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-start"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        w="99%"
                        height="auto"
                        >
                        <Heading as="h6" size="sm" mr={1}>
                          Joe Alagoa
                        </Heading>
                        <Box mr={2} color="#757083" fontWeight="400" >@painghajnr</Box>
                        <Box mr={2} color="#757083" fontWeight="400" >&#183;</Box>
                        <Box mr={2} color="#757083" fontWeight="400" >1h</Box>
                    </Box>
                    <MoreIcon color="#757083" />
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        w="92%"
                        height="auto"
                        ml={-2}
                        mt={1}
                        >
                            hello world
                    </Box>
                    <Box
                        w="95%"
                        h="1.5em"
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                        justifyItems="center"
                        alignItems="center"
                        mt="3"
                        >
                        <Box
                            w="8%"
                            h="auto"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            >
                            <CommentIcon color="#757083"/>
                            <Box color="#757083">1</Box>
                        </Box>
                        <Box
                            w="8%"
                            h="auto"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            >
                            <RetweetIcon color="#757083"/>
                            <Box color="#757083">4</Box>
                        </Box>
                        <Box
                            w="8%"
                            h="auto"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignContent="center"
                            justifyItems="center"
                            alignItems="center"
                            >
                            <HeartIcon color="#757083"/>
                            <Box color="#757083">2</Box>
                        </Box>
                        <ShareIcon color="#757083"/>
                        <span></span>
                    </Box>
                </Box>
            </Box>
          
        </Box>
    )
}

export default Index