import {Divider} from "./Divider";
import {Meta, Story} from "@storybook/react";

export default {
    title: "Atoms/Divider",
    component: Divider,
    argTypes: {
        orientation: {
            type: {name: 'string', required: false},
            description: 'The orientation of the divider.',
            defaultValue: 'horizontal',
            options: ['horizontal', 'vertical'],
            control: {type: 'select',},
        },
    },
} as Meta;


const Template: Story = (args) => (
    <div style={{ width: 400, height: 250, display: 'flex' }}>
        <Divider {...args} />
    </div>
);

export const Overview = Template.bind({});
