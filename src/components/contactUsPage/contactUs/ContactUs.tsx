import * as React from "react";

import './ContactUs.css'
import {Form} from "../../common/form/Form";



const ContactUsComponent: React.FunctionComponent = () => {

    return(
        <Form defaultValues={{ name: '', email: '', reason: 'Support', notes:'' }}>
            <Form.Field name='name' label='your name'/>
            <Form.Field name='email' type='Email' label='Your email address'/>
            <Form.Field name='reason' label='Reason you need to contact us'
                        type='Select'
                        options={['Marketing', 'Support', 'Feedback','Jobs', "Other"]} />
            <Form.Field name='notes' label='Additional notes' type='TextArea' />
        </Form>
    );
};

export const ContactUs = ContactUsComponent;
