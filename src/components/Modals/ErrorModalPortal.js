import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../UI/Backdrop';
import ErrorModal from './ErrorModal';

const ErrorModalPortal = props => {
    return (
    <React.Fragment>
        {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm}/>,
            document.getElementById('backdrop-root')
        )} 
        {ReactDOM.createPortal(
                <ErrorModal
                title={props.title} 
                message={props.message} 
                onConfirm={props.onConfirm}
                />,
                document.getElementById('modal-root')
            )}  
    </React.Fragment>
    )
}

export default ErrorModalPortal;