import React from 'react';
import { Box, Input, VStack, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export function Home() {
    const bgColor = useColorModeValue('gray.100', 'gray.700');
    const textColor = useColorModeValue('gray.800', 'white');

    return (
        <VStack spacing={8} p={8}  height="100vh" justifyContent="center" alignItems="center">
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
                <Input placeholder="Insira seu e-mail" size="md" />
            </Box>
        </VStack>
    );
}
