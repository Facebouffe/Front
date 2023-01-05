import {UserNavigation} from "./UserNavigation";
import {Meta, Story} from "@storybook/react";
import React from "react";

export default {
    title: "Molecules/UserNavigation",
    component: UserNavigation
} as Meta

const Template: Story = (args) => (
    <div style={{ width: 400, display: 'flex', justifyContent: 'center'}}>
        <UserNavigation></UserNavigation>
    </div>
);

export  const Overview = Template.bind({});