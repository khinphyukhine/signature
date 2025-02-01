import React from 'react';
import {Box, Center, Container, Flex, Heading, Link, Stack, VStack} from '@chakra-ui/react'
import homeBackground from '../assets/home-background.jpg';
import '@fontsource/cedarville-cursive'; // Defaults to weight 400

const HomePage = () => {

    return (
        <>
            <Box
                position="absolute"
                width="100%"
                height="100vh"
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
                                href="/menu"
                                fontSize="s" color={'white'}>
                                MENU
                            </Link>
                            <Link href="#" fontSize="s" color={'white'}>
                                LOCATIONS
                            </Link>
                        </Stack>
                    </Flex>
                </Box>
                <Center height="80vh">
                    <VStack spacing={4} align="center">
                        <Heading
                            fontSize={250}
                            fontFamily="'Cedarville Cursive', cursive"
                            textAlign="center"
                            color="white"
                        >
                            Signature
                        </Heading>
                        {/*<Heading*/}
                        {/*    fontSize={{base: '2xl', md: '4xl'}}*/}
                        {/*    fontFamily="'Cedarville Cursive', cursive"*/}
                        {/*    color="brown"*/}
                        {/*>*/}
                        {/*    @ Garden Bistro*/}
                        {/*</Heading>*/}
                    </VStack>
                </Center>
            </Container>
        </>
    )
}

export default HomePage