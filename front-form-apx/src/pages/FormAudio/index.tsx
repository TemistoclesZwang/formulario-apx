import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { FormHandler } from '../../Hooks/FormHandler';
import { FormValue } from '../FormValue';

export function FormAudio() {
    const [submittedValues, setSubmittedValues] = useState<{ [key: string]: string }>({});

    const createInputs = (num: number) => {
        let inputs = [];
        for (let i = 1; i <= num; i++) {
            const audioUrl = `https://example.com/audio${i}.mp3`;
            inputs.push(
                <FormControl isRequired key={`field${i}`}>
                    <audio controls src={audioUrl}>
                        Seu navegador não suporta o elemento de áudio.
                    </audio>
                    <FormLabel htmlFor={`field${i}`} mt={2}>Insira o que você ouviu no áudio {i}</FormLabel>
                    <Input id={`field${i}`} name={`field${i}`} />
                </FormControl>
            );
        }
        return inputs;
    };

    const handleSubmit = (values: { [key: string]: string }) => {
        setSubmittedValues(values);
    };

    return (
        <Box p={4}>
            <FormHandler onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    {createInputs(2)}
                    <Button type='submit' colorScheme='blue'>Avançar</Button>
                </VStack>
            </FormHandler>
            {Object.keys(submittedValues).length > 0 && <FormValue values={submittedValues} />}
        </Box>
    );
}
