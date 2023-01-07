import {Category} from "./Category";
import {Meta, Story} from "@storybook/react";

export default {
    title: "Atoms/Category",
    component: Category,
    argTypes: {
        size: {
            type: {name: "string", required: false},
            description: 'The size of category button.',
            defaultValue: 'medium',
            control: {type: 'select'},
            options: ['small', 'medium', 'large'],
        },
        category: {
            type: {name: 'string', required: false},
            description: 'The category of food.',
            defaultValue: 'Halal',
            control: {type: 'select'},
            options: ['Friterie'
                , 'Burger'
                , 'Pizza'
                , 'Asiatique'
                , 'Kebab'
                , ' Tacos'
                , 'Halal'
                , 'Vegan'
                , 'Indien'
                , 'Patisserie'
            ]
        },
    },
} as Meta<typeof Category>;

const forms: Story<typeof Category> = (args) => <div style={{display: 'flex', justifyContent: 'center'}}>
    <Category {...args} /></div>

export const Categorys = forms.bind({});

