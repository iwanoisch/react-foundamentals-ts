import React from "react";
import {ContactUs} from "./contactUs/ContactUs";

interface State {
    name: string;
    email: string;
    reason: string;
    notes: string;
}

class ContactUsPageComponent extends React.Component<{}, State> {
    public constructor(props: {}) {
        super(props);
        this.state = {
           name:'',
           email:'',
           reason:'',
           notes:''
        };

    }

    private  handleNameChange = (name: string) => {
       this.setState({name: name})
    }
    private  handleEmailChange = (email: string) => {
        this.setState({email: email})
    }
    private  handleNotesChange = (notes: string) => {
        this.setState({notes: notes})
    }
    private  handleReasonChange = (reason: string) => {
        this.setState({reason: reason})
    }

    public render(){
        return (
            <div className='page-container'>
                <div>contact</div>
                <ContactUs
                    email={this.state.email}
                    name={this.state.name}
                    notes={this.state.notes}
                    reason={this.state.reason}
                    onNameChange={this.handleNameChange}
                    onEmailChange={this.handleEmailChange}
                    onReasonChange={this.handleReasonChange}
                    onNotesChange={this.handleNotesChange} />
            </div>
        );
    }
}

export const ContactUsPage = ContactUsPageComponent;
