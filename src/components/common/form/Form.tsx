import * as React from "react";

interface FormContext {
    values: Values;
    setValue?:  (fieldName: string, value: any) => void;
}

const FormContext = React.createContext<FormContext>({
    values: {}
});

interface Fields {
    name: string;
    label: string;
    type?: "Text" | "Email" | "Select" | "TextArea";
    options?: string[];
}

interface Props {
    defaultValues: Values;
}

interface State {
    values: Values
}

interface Values {
    [key: string]: any;
}

class FormComponent extends React.Component<Props, State> {
    private setValue = (fieldName: string, value: any) => {
        const newValues = { ...this.state.values, [fieldName] : value};
        this.setState({values: newValues})
    };
    public static Field: React.FC<Fields> = (props) => {
        const {name, label, type, options} = props;
        const handleChange = (
            e : | React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>,
            context: FormContext
        ) => {
            if (context.setValue) {
                context.setValue(props.name, e.currentTarget.value);
            }
        }
        return(
            <FormContext.Consumer>
                {context => (
                    <div className="form-group">
                        <label htmlFor={name}>{label}</label>
                        {(type === "Text" || type === "Email") && (
                            <input type={type.toLowerCase()} id={name}
                                   value={context.values[name]}
                                   onChange={e => handleChange(e, context)} />
                        )}

                        {(type === 'TextArea') && (
                            <textarea id={name}
                                      value={context.values[name]}
                                      onChange={e => handleChange(e, context)} />
                        )}

                        {(type === 'Select') && (
                            <select value={context.values[name]}
                            onChange={e => handleChange(e, context)}>
                                {options && options.map(
                                    option => (
                                        <option key={option} value="option">
                                            {option}
                                        </option>
                                    ))}
                            </select>
                        )}
                    </div>
                )}
            </FormContext.Consumer>
        );
    };

    constructor(props: Props){
        super(props);
        this.state = {
            values: props.defaultValues
        }
    }
    public render() {
        const context: FormContext = {
            setValue: this.setValue,
            values: this.state.values
        };

        return (
            <FormContext.Provider value={context}>
                <form className='form' noValidate={true}>
                    {this.props.children}
                </form>
            </FormContext.Provider>
        );
    }

};

export const Form = FormComponent;

Form.Field.defaultProps = {
    type: "Text"
};
