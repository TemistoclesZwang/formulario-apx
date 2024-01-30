import React, { ReactNode } from 'react';

interface FormHandlerProps {
    children: ReactNode;
    onSubmit: (values: { [key: string]: string }) => void;
}

export function FormHandler({ children, onSubmit }: FormHandlerProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const values = Array.from(formData.entries()).reduce((acc, [key, value]) => {
            acc[key] = value as string;
            return acc;
        }, {} as { [key: string]: string });

        onSubmit(values);
    };

    return <form onSubmit={handleSubmit}>{children}</form>;
}
