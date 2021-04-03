import React from "react"
import { Box, Heading, Textarea, Button } from "@chakra-ui/react"
import ImageIcon from "./ImageIcon"
import GifIcon from "./GifIcon"
import PollIcon from "./PollIcon"
import SmileIcon from "./SmileIcon"
import CalendarIcon from "./CalendarIcon"
import MoreIcon from "./MoreIcon"
import CommentIcon from "./CommentIcon"
import RetweetIcon from "./RetweetIcon"
import HeartIcon from "./HeartIcon"
import ShareIcon from "./ShareIcon"

const Content=(props)=>{
    return(
        <Box
            w="100%"
            minHeight="100%"
            left="0"
            >
            <Box
                w="100%"
                minHeight="3.5em"
                borderRightWidth="0px"
                borderLeftWidth="0px"
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignContent="center"
                justifyItems="center"
                alignItems="center"
                pl="4"
                pr="4"
                borderBottomColor="#F2F2F2"
                borderBottomWidth="1.5px"
                >
                <Heading as="h4" size="md" fontWeight="800">
                  Home
                </Heading>
            </Box>
            {props.subs}
        </Box>
    )
}

export default Content;