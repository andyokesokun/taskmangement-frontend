import * as React from "react";
import {Show, SimpleShowLayout, TextField, RichTextField}  from 'react-admin'

export const PostDetail = props =>(
   <Show {...props}>
       <SimpleShowLayout>
            <TextField source="title" />
            <RichTextField source="body" />
        </SimpleShowLayout>
    </Show> 

)


