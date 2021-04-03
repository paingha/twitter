import React from "react"
import { Box, Heading, Button } from "@chakra-ui/react"
import Logo from "./Logo"
import MoreIcon from "./MoreIcon"
import MoreDot from "./MoreDot"
import BookmarkIcon from "./BookmarkIcon"
import UserIcon from "./UserIcon"
import ListIcon from "./ListIcon"
import HashTagIcon from "./HashTagIcon"
import NotificationIcon from "./NotificationIcon"
import MailIcon from "./MailIcon"
import HomeIcon from "./HomeIcon"
import useHover from "./UseHover"

const SideNav=(props)=>{
    const [hoverRef, isHovered] = useHover();
    const [notifRef, notifHovered] = useHover();
    const [bookmarkRef, bookmarkHovered] = useHover();
    const [messageRef, messageHovered] = useHover();
    const [listRef, listHovered] = useHover();
    const [profileRef, profileHovered] = useHover();
    const [moreRef, moreHovered] = useHover();
    const [homeRef, homeHovered] = useHover();
    return(
        <Box
            w="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent={["center", "center", "flex-start", "flex-start", "flex-start"]}
            alignContent="center"
            alignItems="center"
            pt="4"
            pb="4"
            >
            <Box
                w={["90%", "90%", "90%", "80%", "85%"]}
                h="95%"
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignContent="center"
                alignItems={["center", "center", "center", "flex-start", "flex-start"]}
                >
            <Box
                w={["90%", "90%", "50%", "50%", "50%"]}
                h="8%"
                display="flex"
                flexDirection="row"
                justifyContent={["center", "center", "center", "flex-start", "flex-start"]}
                alignContent="center"
                alignItems="flex-start"
                >
                <Box
                    ml={["0", "0", "0", "0", "2"]}
                    mr={["0", "0", "0", "0", "6"]}
                    >
                    <Logo />
                </Box>
                <Box>
                </Box>
            </Box>
            <Box
                w={["90%", "90%", "50%", "70%"]}
                h={["8%"]}
                display="flex"
                flexDirection="row"
                justifyContent={["center", "center", "center", "flex-start", "flex-start"]}
                alignContent="center"
                alignItems="center"
                cursor="pointer"
                _hover={{
                    backgroundColor: "rgba(29, 161, 242, 0.1)",
                    borderRadius: "35px"
                  }}
                  ref={homeRef}
                >
                <Box
                    ml={["0", "0", "0", "0", "2"]}
                    mr={["0", "0", "0", "6", "6"]}
                    >
                    <HomeIcon color="#1DA1F2" />
                </Box>
                <Box
                    display={["none", "none", "none", "block", "block"]}
                    >
                    <Heading as="h4" size="md" color="#1DA1F2">
                      Home
                    </Heading>
                </Box>
            </Box>
            <Box
                w={["90%", "90%", "50%", "75%"]}
                h={["8%"]}
                display="flex"
                flexDirection="row"
                justifyContent={["center", "center", "center", "flex-start", "flex-start"]}
                alignContent="center"
                alignItems="center"
                cursor="pointer"
                _hover={{
                    backgroundColor: "rgba(29, 161, 242, 0.1)",
                    borderRadius: "35px",
                    color: "#1DA1F2"
                  }}
                ref={hoverRef}
                mt={1}
                >
                <Box
                    ml={["0", "0", "0", "0", "2"]}
                    mr={["0", "0", "0", "6", "6"]}
                    >
                    <HashTagIcon color={isHovered? "#1DA1F2": "#000000"} />
                </Box>
                <Box
                    display={["none", "none", "none", "block", "block"]}
                    >
                    <Heading as="h4" size="md">
                      Explore
                    </Heading>
                </Box>
            </Box>
            <Box
                w={["90%", "90%", "90%", "100%"]}
                h={["8%"]}
                display="flex"
                flexDirection="row"
                justifyContent={["center", "center", "center", "flex-start", "flex-start"]}
                alignContent="center"
                alignItems="center"
                cursor="pointer"
                _hover={{
                    backgroundColor: "rgba(29, 161, 242, 0.1)",
                    borderRadius: "35px",
                    color: "#1DA1F2"
                  }}
                ref={notifRef}
                mt={1}
                >
                <Box
                    ml={["0", "0", "0", "0", "2"]}
                    mr={["0", "0", "0", "6", "6"]}
                    >
                    <NotificationIcon color={notifHovered? "#1DA1F2": "#000000"}/>
                </Box>
                <Box
                    display={["none", "none", "none", "block", "block"]}
                    >
                    <Heading as="h4" size="md">
                      Notifications
                    </Heading>
                </Box>
            </Box>
            <Box
                w={["90%", "90%", "50%", "90%"]}
                h={["8%"]}
                display="flex"
                flexDirection="row"
                justifyContent={["center", "center", "center", "flex-start", "flex-start"]}
                alignContent="center"
                alignItems="center"
                cursor="pointer"
                _hover={{
                    backgroundColor: "rgba(29, 161, 242, 0.1)",
                    borderRadius: "35px",
                    color: "#1DA1F2"
                  }}
                  ref={messageRef}
                mt={1}
                >
                <Box
                    ml={["0", "0", "0", "0", "2"]}
                    mr={["0", "0", "0", "6", "6"]}
                    >
                    <MailIcon color={messageHovered? "#1DA1F2": "#000000"}/>
                </Box>
                <Box
                    display={["none", "none", "none", "block", "block"]}
                    >
                    <Heading as="h4" size="md">
                      Messages
                    </Heading>
                </Box>
            </Box>
            <Box
                w={["90%", "90%", "50%", "90%"]}
                h={["8%"]}
                display="flex"
                flexDirection="row"
                justifyContent={["center", "center", "center", "flex-start", "flex-start"]}
                alignContent="center"
                alignItems="center"
                cursor="pointer"
                _hover={{
                    backgroundColor: "rgba(29, 161, 242, 0.1)",
                    borderRadius: "35px",
                    color: "#1DA1F2"
                  }}
                  ref={bookmarkRef}
                mt={1}
                >
                <Box
                    ml={["0", "0", "0", "0", "2"]}
                    mr={["0", "0", "0", "6", "6"]}
                    >
                    <BookmarkIcon color={bookmarkHovered? "#1DA1F2": "#000000"}/>
                </Box>
                <Box
                    display={["none", "none", "none", "block", "block"]}
                    >
                    <Heading as="h4" size="md">
                      Bookmarks
                    </Heading>
                </Box>
            </Box>
            <Box
                w={["90%", "90%", "50%", "60%"]}
                h={["8%"]}
                display="flex"
                flexDirection="row"
                justifyContent={["center", "center", "center", "flex-start", "flex-start"]}
                alignContent="center"
                alignItems="center"
                cursor="pointer"
                _hover={{
                    backgroundColor: "rgba(29, 161, 242, 0.1)",
                    borderRadius: "35px",
                    color: "#1DA1F2"
                  }}
                  ref={listRef}
                mt={1}
                >
                <Box
                    ml={["0", "0", "0", "0", "2"]}
                    mr={["0", "0", "0", "6", "6"]}
                    >
                    <ListIcon color={listHovered? "#1DA1F2": "#000000"}/>
                </Box>
                <Box
                    display={["none", "none", "none", "block", "block"]}
                    >
                    <Heading as="h4" size="md">
                      Lists
                    </Heading>
                </Box>
            </Box>
            <Box
                w={["90%", "90%", "50%", "70%"]}
                h={["8%"]}
                display="flex"
                flexDirection="row"
                justifyContent={["center", "center", "center", "flex-start", "flex-start"]}
                alignContent="center"
                alignItems="center"
                cursor="pointer"
                _hover={{
                    backgroundColor: "rgba(29, 161, 242, 0.1)",
                    borderRadius: "35px",
                    color: "#1DA1F2"
                  }}
                  ref={profileRef}
                mt={1}
                >
                <Box
                    ml={["0", "0", "0", "0", "2"]}
                    mr={["0", "0", "0", "6", "6"]}
                    >
                    <UserIcon color={profileHovered? "#1DA1F2": "#000000"}/>
                </Box>
                <Box
                    display={["none", "none", "none", "block", "block"]}
                    >
                    <Heading as="h4" size="md">
                      Profile
                    </Heading>
                </Box>
            </Box>
            <Box
                w={["90%", "90%", "50%", "65%"]}
                h={["9%"]}
                display="flex"
                flexDirection="row"
                justifyContent={["center", "center", "center", "flex-start", "flex-start"]}
                alignContent="center"
                alignItems="center"
                cursor="pointer"
                _hover={{
                    backgroundColor: "rgba(29, 161, 242, 0.1)",
                    borderRadius: "35px",
                    color: "#1DA1F2"
                  }}
                  ref={moreRef}
                mt={1}
                >
                <Box
                    ml={["0", "0", "0", "0", "2"]}
                    mr={["0", "0", "0", "6", "6"]}
                    >
                    <MoreDot color={moreHovered? "#1DA1F2": "#000000"}/>
                </Box>
                <Box
                    display={["none", "none", "none", "block", "block"]}
                    >
                    <Heading as="h4" size="md">
                      More
                    </Heading>
                </Box>
            </Box>
            <Box
                w={["70%", "70%", "70%", "95%", "90%"]}
                h="8%"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignContent="center"
                alignItems="flex-start"
                mt={4}
                ml={["0", "0", "0", "-8px", "-8px"]}
                >
                <Button display={["none", "none", "none", "block", "block"]} boxShadow="lg" backgroundColor="#1DA1F2" color="#ffffff" width={["50px", "50%", "100%", "100%", "100%"]} height="50px" borderRadius={["100%", "100%", "100%", "25px", "25px"]}>
                  Tweet
                </Button>
                <Button display={["block", "block", "block", "none", "none"]} boxShadow="lg" backgroundColor="#1DA1F2" color="#ffffff" width={["40px", "40px"]} height="40px" borderRadius={["40px", "40px"]}>
                  T
                </Button>
            </Box>
            </Box>
            <Box
                w="100%"
                h="5%"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignContent="center"
                alignItems="center"
                mb="2"
                pr="4"
                pl={["22%", "34%", "34%", "10%", "9%"]}
                >
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                >
                <img style={{borderRadius: "50%"}} width={40} height={40} src="https://pbs.twimg.com/profile_images/1348861517664555010/-FBxJ5h8_normal.jpg" />
                <Box ml="2" display={["none", "none", "none", "block", "block"]}>
                    <Heading as="h6" size="sm">
                      Joe Alagoa
                    </Heading>
                    <span style={{color: "#757083"}}>@painghajnr</span>
                </Box>
                
            </Box>
            <Box display={["none", "none", "none", "block", "block"]} alignSelf="flex-end">
                <MoreIcon color="#000000" />
            </Box>
            </Box>
        </Box>
    )
}

export default SideNav;