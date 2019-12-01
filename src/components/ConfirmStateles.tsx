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

const ConfirmStatelessOne: React.FunctionComponent<Props> = (props) => {
    const handleCancelClick = () => {
        props.onCancelClick();
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
                    <button className="confirm-cancel" onClick={handleCancelClick}>{props.cancelCaption}</button>
                    <button className="confirm-ok" onClick={handleOkClick}>{props.okCaption}</button>
                </div>
            </div>
        </div>
    )
};

ConfirmStatelessOne.defaultProps = {
    cancelCaption: "Cancel",
    okCaption: "Okay"
};

export const ConfirmStateless = ConfirmStatelessOne;
