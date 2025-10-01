import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="md" centerContent minH="100vh" py={10}>
      <VStack spacing={6} w="100%">
        <Box
          bg="white"
          w="100%"
          p={6}
          borderRadius="xl"
          boxShadow="md"
          textAlign="center"
        >
          <Text fontSize="3xl" fontWeight="bold" color="brand.600">
            Void
          </Text>
          <Text fontSize="sm" color="gray.500" mt={1}>
            Real-time messaging
          </Text>
        </Box>

        <Box bg="white" w="100%" p={6} borderRadius="xl" boxShadow="md">
          <Tabs variant="soft-rounded" colorScheme="brand">
            <TabList mb={6}>
              <Tab w="50%" fontWeight="medium">
                Login
              </Tab>
              <Tab w="50%" fontWeight="medium">
                Sign Up
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={0}>
                <Login />
              </TabPanel>
              <TabPanel p={0}>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </VStack>
    </Container>
  );
}

export default Homepage;
