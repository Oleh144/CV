import {Box, Button, Flex, Span} from "@chakra-ui/react";
import {useToDosStore} from "../store/useToDosStore.jsx";



function ToDoElement({children, completed, id}) {
    const {deleteTodos, completeTodos} = useToDosStore()

    function handleDelete() {
        deleteTodos(id)
    }

    function handleComplete() {
        completeTodos(id)
    }

    return (
        <>
            <Flex
                bg="white.300"
                padding={{base: '5px 15px'}}
                mb={3}
                borderWidth="1px"
                borderRadius="2px"
                borderColor="gray.300"
                justifyContent="space-between"
                alignItems="center"
                gap={4}
            >
                <Box as={Span} textDecoration={completed ? "line-through" : "none"} color={completed ? "red" : "black"}>{children}</Box>
                <Flex gap={4}>
                    <Button size={{base: "xs", md: 'md'}} onClick={handleComplete} bg="green.500">Complete</Button>
                    <Button size={{base: "xs", md: 'md'}} onClick={handleDelete} bg="red">Delete</Button>
                </Flex>
            </Flex>
        </>
    )
}

export default ToDoElement