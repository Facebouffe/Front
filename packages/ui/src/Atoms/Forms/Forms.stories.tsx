import {Forms} from "./Forms";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Atoms/Forms",
    component: Forms,
    argTypes: {},
}as ComponentMeta<typeof Forms>;

 const forms :ComponentStory <typeof Forms>= (children) => <Forms {...children}/>
// export const formsInscipt:ComponentStory <typeof Forms> = (children) => <Forms {...children}/>

export const Nom = forms.bind({});
Nom.args = {
    children: "Nom ...",
};
export const Prenoms = forms.bind({});
Prenoms.args = {
    children: "Prénoms ...",
};
