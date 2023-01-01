import {Rating} from "./Rating";
import React from "react";
import {Meta, Story} from "@storybook/react";

export default {
    title: "Atoms/Rating",
    component: Rating,
    argTypes: {
        name: {
            type: {name: 'string', required: false},
            description: 'Name used on the input radio.',
            defaultValue: 'rating',
            control: {type: 'text'},
        },
        readonly: {
            type: { name: 'boolean', required: false },
            description: 'Whether the rating is read only.',
            defaultValue: false,
            control: { type: 'boolean' },
        },
        value: {
            type: { name: 'number', required: false },
            description: 'Rating value.',
            defaultValue: 0,
            control: { type: 'range', min: 0, max: 5, step: 0.5 },
        },
        onChange: {
            type: {name: 'string', required: false},
            description: 'Called when value has changed',
            control: {type: 'function'}
        }
    }
} as Meta;

const Template: Story = (args) => <Rating {...args} />;

export const Overview = Template.bind({})