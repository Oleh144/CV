import {Badge, Box, Container, Flex, Heading, List} from "@chakra-ui/react";

function Education() {
    return (
        <>
            <Box as="section" bg={{base: 'gray.100', _dark: 'gray.800'}} paddingY={{base: "30px", md: "50px"}}>
                <Container maxW="800px" paddingX={{base: "32px", md: "48px"}}>
                    <Flex justify="center">
                        <Badge size="lg" as="h2" bg="gray.400" color="white" mb="5">Education</Badge>
                    </Flex>
                    <List.Root>
                        <List.Item mb="3">
                            <Heading>Bachelor, Karazin Kharkiv National University, Kharkiv</Heading>
                            <List.Root ps="5">
                                <List.Item>Faculty of Economics | 2022 - present</List.Item>
                            </List.Root>
                        </List.Item>
                        <List.Item mb="3">
                            <Heading>Hillel It School</Heading>
                            <List.Root ps="5">
                                <List.Item>Front-end Pro | February 2025 - July 2025</List.Item>
                            </List.Root>
                        </List.Item>
                    </List.Root>
                </Container>
            </Box>
        </>
    )
}

export default Education