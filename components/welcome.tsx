import { Button, Flex, Heading, useColorMode } from "@chakra-ui/react";
import { FC } from "react";

export type WelcomeProps = {
  /** Title text to display in the welcome */
  title: string;
  /** standard children prop: accepts any valid React Node */
  // children: React.ReactNode;
  /** callback function passed to the onClick handler*/
  onClick?: () => void;
};

const Welcome: FC<WelcomeProps> = ({ title, onClick = () => {} }) => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex justifyContent="center" className="welcome-page" bg="ghosty.900">
      <Flex direction="column" gap={3} width="400px" p={12}>
        <Heading>{title}</Heading>
        <button onClick={onClick}>Click me</button>
        <Button
          colorScheme="orange"
          size="lg"
          variant="outline"
          className="welcome-button"
          onClick={onClick}
        >
          Click me
        </Button>
        <Button colorScheme="teal" size="md" onClick={toggleColorMode}>
          Change Color Mode
        </Button>
      </Flex>
    </Flex>
  );
};

export default Welcome;
