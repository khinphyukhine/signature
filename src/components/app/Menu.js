import React from 'react';
import {Box, Container, Flex, Image, Link, Stack, VStack} from "@chakra-ui/react";
import homeBackground from "../assets/home-background.jpg";
import menuPage1 from "../assets/menuAssets/menu_page_1.jpg"
import menuPage2 from "../assets/menuAssets/menu_page_2.jpg"
import menuPage3 from "../assets/menuAssets/menu_page_3.jpg"
import menuPage4 from "../assets/menuAssets/menu_page_4.jpg"
import menuPage5 from "../assets/menuAssets/menu_page_5.jpg"
import menuPage6 from "../assets/menuAssets/menu_page_6.jpg"
import menuPage7 from "../assets/menuAssets/menu_page_7.jpg"
import menuPage8 from "../assets/menuAssets/menu_page_8.jpg"


const Menu = () => {
    return (
        <>
            <Box
                position="absolute"
                width="100%"
                height="30vh"
                bgImage={`url(${homeBackground})`}  // Set the background image
                bgSize="cover"                      // Cover the entire container
                bgPosition="center"                 // Center the background image
                bgRepeat="no-repeat"                // Prevent repetition of the background
                filter="blur(3px)"                  // Apply blur to the background image
                zIndex="-1"
            />
            <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg="rgba(0, 0, 0, 0.3)"  // Adjust the opacity as needed
                zIndex="-1"
            />
            <Container
                maxW="full"
                minHeight="100vh"
                centerContent
                position="relative"
                zIndex="1"
            >
                <Box
                    width="100vw"
                    bg="rgba(0, 0, 0, 0.1)"
                    backdropFilter="blur(5px)"
                >
                    <Flex style={{paddingTop: 60, paddingBottom: 30}}
                          align="center"
                          justify="center"
                          direction="column"

                    >
                        <Stack direction={{base: "column", md: "row"}} gap="10">
                            <Link
                                href="/"
                                fontSize="s" color={'white'}>
                                HOME
                            </Link>
                            <Link href="#" fontSize="s" color={'white'}>
                                LOCATIONS
                            </Link>
                        </Stack>
                    </Flex>
                </Box>
                <VStack>
                    <Flex gap={2}>
                        <Image src={menuPage1}/>
                        <Image src={menuPage2}/>
                        <Image src={menuPage3}/>

                    </Flex>
                    <Flex gap={2}>
                        <Image src={menuPage4}/>
                        <Image src={menuPage5}/>
                        <Image src={menuPage6}/>
                    </Flex>
                    <Flex gap={2}>
                        <Image src={menuPage7}/>
                        <Image src={menuPage8}/>
                    </Flex>
                </VStack>

            </Container>
        </>
    )
}

export default Menu