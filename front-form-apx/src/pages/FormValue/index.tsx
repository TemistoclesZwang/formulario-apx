import React from 'react';
import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

interface FormValueProps {
    values: { [key: string]: string };
}

export function FormValue({ values }: FormValueProps) {
    return (
        <VStack spacing={4} mt={4}>
            {Object.entries(values).map(([key, value], index) => (
                <FormControl key={key}>
                    <FormLabel htmlFor={`response${index}`}>Mensagem: {value}</FormLabel>
                    <Input id={`response${index}`} placeholder={`Resposta para ${key}`} />
                </FormControl>
            ))}
        </VStack>
    );
}
