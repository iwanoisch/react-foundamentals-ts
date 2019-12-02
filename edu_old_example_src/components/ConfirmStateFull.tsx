import * as React from "react";
import "./Confirm.css"

interface Props {
    open: boolean;
    title: string;
    content: string;
    cancelCaption?: string;
    okCaption?: string;
    onOkClick: () => void;
    onCancelClick: () => void;
}

const ConfirmStateFullOne: React.FunctionComponent<Props> = props => {
    // Dichiara una nuova variable di stato, che chiameremo "contatore"
    const [cancelClickCount, setCancelClickCount] = React.useState(0);

    // La funzione accetta una arrow function, che viene eseguita al primo rendering del componente.
    React.useEffect(() => {
        console.log("Confirm first rendering");
    }, []);

    // Se guardiamo l'app in esecuzione e la console, vedremo Confirm rendering apparire
    // ogni volta che Confirmviene eseguito il rendering.
    React.useEffect(() => {
        console.log("Confirm rendering");
    });

    // Se guardiamo l'app in esecuzione e la console, vedremo open changed apparire ogni
    // volta che il valore del  Confirmcomponente  opencambia valore.
    React.useEffect(
        () => {
            console.log("open changed");
        },
        [props.open]
    );

    // può restituire una funzione che viene eseguita quando il componente è smontato.
    // in questo caso non e' possibile vederlo perche' non puo' essere smontato
    React.useEffect(() => {
        console.log("Confirm first rendering");
        return () => {
            console.log("Confirm unmounted");
        };
    }, []);

    const handleCancelClick = () => {
       const newCount = cancelClickCount +1;
       setCancelClickCount(newCount);
       if(newCount >= 2) {
           props.onCancelClick()
       }
    };

    const handleOkClick = () => {
        props.onOkClick();
    };

    return(
        <div className={props.open? 'confirm-wrapper confirm-visible' : 'confirm-wrapper'}>
            <div className="confirm-container">
                <div className="confirm-title-container">
                    <span>{props.title ? props.title : "React and TypeScript"}</span>
                </div>
                <div className="confirm-content-container">
                    <p>{props.content}</p>
                </div>
                <div className="confirm-buttons-container">
                    <button className="confirm-cancel" onClick={handleCancelClick}>{cancelClickCount === 0 ? props.cancelCaption : "Really?"}</button>
                    <button className="confirm-ok" onClick={handleOkClick}>{props.okCaption}</button>
                </div>
            </div>
        </div>
    )
};

ConfirmStateFullOne.defaultProps = {
    cancelCaption: "Cancel",
    okCaption: "Okay"
};

export const ConfirmStateFull = ConfirmStateFullOne;
