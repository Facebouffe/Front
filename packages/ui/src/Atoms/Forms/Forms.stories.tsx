import {Forms} from "./Forms";
import {Meta, Story} from "@storybook/react";

export default {
    title: "Atoms/Forms",
    component: Forms,
    argTypes: {
        variant: {
            type: {name: "string", required: false},
            description: 'Input of Forms',
            defaultValue: {type: 'select'},
            control: {type: 'select'},
        },
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
export const Prenoms = forms.bind({});
Prenoms.args = {
    children: "Prénoms ...",
};

export const AdresseMail = forms.bind({});
AdresseMail.args = {
    children: "Adresse mail ...",
};

export const MotDePasse = forms.bind({});
MotDePasse.args = {
    children: "Mot de passe ...",
};

export const AdressePost = forms.bind({});
AdressePost.args = {
    children: "Adresse postale ...",
};

export const SiretNum = forms.bind({});
SiretNum.args = {
    children: "Numéro de siret ...",
};
