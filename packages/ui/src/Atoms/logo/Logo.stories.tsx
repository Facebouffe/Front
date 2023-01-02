import {Logo} from "./Logo";
import React from "react";
import {Meta, Story} from "@storybook/react";

export default {
    title: "Atoms/Logo",
    component: Logo,
    argTypes: {},
}as Meta<typeof Logo>;

const logo :Story <typeof Logo>= () => <Logo />

export const LogoConnexion = logo.bind({});
