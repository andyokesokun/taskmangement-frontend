import * as React from "react";
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';
import {PostFilter} from '../Filters'

export const PostList = props => (
    <List {...props} filters={<PostFilter/>}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);