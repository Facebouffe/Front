import React from "react";
import {Accueil_restaurant_buttons} from "./Accueil_restaurant_buttons";
import { Meta, Story } from '@storybook/react';

export default {
    title: "Molecules/Accueil_restaurant_buttons",
    component: Accueil_restaurant_buttons
} as Meta

const Template: Story = () => (
    <div style={{ width: 699, display: 'flex', justifyContent: 'center', /*background: '#E9E9E9'*/}}>
    <Accueil_restaurant_buttons></Accueil_restaurant_buttons>
    </div>
);

export  const Overview = Template.bind({});
