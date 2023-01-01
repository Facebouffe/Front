import { Button } from "./Button";
import React from "react";
import { Meta, Story } from '@storybook/react';

export default {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
        variant: {
            type: { name: 'string', required: false},
            description: 'The variant of the button.',
            defaultValue: 'primary',
            control: {type: 'select'},
            options: ['primary',
                'secondary',
                'tertiary'
            ],
        },
        size: {
            type: { name: 'string', required: false },
            description: 'The size of the button.',
            defaultValue: 'medium',
            control: {type: 'select'},
            options: ['small', 'medium', 'large', 'stretched'],
        },
        children: {
            type: { name: 'string', required: false },
            description: 'The content to render inside the component.',
            defaultValue: 'Button',
            control: {type: 'text',},
        },
    },
    parameters: {
        actions: {
            handles: ['mouseenter', 'click', 'focusin', 'focusout'],
        },
    },
} as Meta;

const Template: Story = (args) => (
    <div style={{ width: 400, display: 'flex', justifyContent: 'center'}}>
        <Button {...args}/>
    </div>
);

export  const Overview = Template.bind({});
