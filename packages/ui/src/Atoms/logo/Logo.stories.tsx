import {Logo} from "./Logo";
import React from "react";
import {Meta, Story} from "@storybook/react";

export default {
    title: "Atoms/Logo",
    component: Logo,
    argTypes: {
        size: {
            type: {name: 'string', required: false},
            descrption: 'The logo of Face Bouffe',
            defaultValue:'medium',
            control: {type: 'select'},
            options:['small', 'medium', 'large']
        }
    },
}as Meta<typeof Logo>;

const logo :Story <typeof Logo>= (args) => <Logo {...args}/>

export const LogoConnexion = logo.bind({});
