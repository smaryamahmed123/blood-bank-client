import React from 'react';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// Define a reusable Button component that accepts props
const CustomButton = ({
    text,
    variant = 'contained',
    color = 'primary',
    href,
    onClick,
    size,
    sx = {},
    ...rest
}) => {
    // Return a Button component from Material-UI
    return (
        <Button
            variant={variant}
            color={color}
            href={href}
            onClick={onClick}
            component={href ? RouterLink : 'button'}
            sx={sx}
            {...rest}
        >
            {text}
        </Button>
    );
};

export default CustomButton;
