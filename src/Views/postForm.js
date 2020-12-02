import * as React from "react";
import { Create,Edit,SimpleForm,TextInput, ReferenceInput, SelectInput} from 'react-admin';


export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
          <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
               <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput source="body" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
               <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput source="body" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);