import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import {
  Box,
  Button,
  Input,
  Image,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

export function Home() {
  const bgColor = useColorModeValue("gray.500", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setEmail(e.target.value);

  const handleButtonClick = () => {
    console.log(email);
    navigate("/formularioaudio");
    // .transformar em componente separado e enviar email para a api do back
  };
  return (
    <>
      <Box
        boxSize="100px"
        display={"flex"}
        // justifyContent={'center'}
        alignItems={"center"}
        gap={5}
      >
        <Image src={logo} />
        <Text fontSize="lg" color={bgColor}>
          Comunicare Solutions
        </Text>
      </Box>
      <VStack
        spacing={8}
        p={8}
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <MotionBox
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.0 }}
          fontSize="4xl"
          fontWeight="bold"
          color={textColor}
        >
          Que bom ver você aqui =)
        </MotionBox>
        <MotionBox
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.0 }}
          fontSize="m"
          // fontWeight="bold"
          color={textColor}
        >
          Formulário de assertividade de palavras
        </MotionBox>
        <Box>
          <Input
            type="email"
            placeholder="Insira seu e-mail"
            size="md"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Box>
        <Button colorScheme="blue" onClick={handleButtonClick} type="submit">
          Avançar
        </Button>
      </VStack>
    </>
  );
}
