import { Header } from "./Header";
import React from "react";
import { Meta, Story } from '@storybook/react';

export default {
    title: "Organisms/Header",
    component: Header,
    argTypes: {
        variant: {
            type: { name: 'string', required: false},
            description: 'The variant of the header.',
            defaultValue: 'user',
            control: {type: 'select'},
            options: ['user',
                'restaurant',
                'deliverer'
            ],
        },
    },
} as Meta;

const Template: Story = (args) => (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Header variant={"user"}/>
    </div>
);

export  const Overview = Template.bind({});
