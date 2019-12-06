import * as React from "react";

import './ContactUs.css'

interface Props {
    name: string;
    onNameChange: (name: string) => void;
    email: string;
    onEmailChange: (email: string) => void;
    reason: string;
    onReasonChange: (reason: string) => void;
    notes: string;
    onNotesChange: (notes: string) => void;
}

const ContactUsComponent: React.FunctionComponent<Props> = props => {

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onNameChange(e.currentTarget.value);
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onEmailChange(e.currentTarget.value);
    };

    const handleReasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        props.onReasonChange(e.currentTarget.value);

    };

    const handleNotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onNotesChange(e.currentTarget.value);
    };

    return(
        <form className='form' noValidate={true}>
            <div className='form-group'>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" value={props.name} onChange={handleNameChange} />
            </div>

            <div className='form-group'>
                <label htmlFor="email">Your email address</label>
                <input type="text" id='email' value={props.email}  onChange={handleEmailChange} />
            </div>

            <div className='form-group'>
                <label htmlFor="reason">Reason you need to contact us</label>
                <select id='reason' value={props.reason}  onChange={handleReasonChange}>
                    <option value="Marketing">Marketing</option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Jobs">Jobs</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className='form-group'>
                <label htmlFor="notes">Additional notes</label>
                <input type="text" id='notes' value={props.notes}  onChange={handleNotesChange} />
            </div>
        </form>
    );
};

export const ContactUs = ContactUsComponent;
