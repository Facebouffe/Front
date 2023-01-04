import {Forms} from "./Forms";
import {Meta, Story} from "@storybook/react";

export default {
    title: "Atoms/Forms",
    component: Forms,
    argTypes: {
        size: {
            type: {name: "string", required: false},
            description: 'The size of the input.',
            defaultValue: 'medium',
            control: {type: 'select'},
            options: ['small', 'medium', 'large', 'stretched'],
        },
        children: {
            type: { name: 'string', required: false },
            description: 'The content to render inside the component.',
            defaultValue: 'Forms',
            control: {type: 'text',},
        },
    },
} as Meta<typeof Forms>;

const forms: Story<typeof Forms> = (args) => <Forms {...args}/>

export const Nom = forms.bind({});
Nom.args = {
    children: "Nom ...",
};

