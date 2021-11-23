import React from "react"
import ReactDOM  from "react-dom";
import Backdrop from "../UI/Backdrop";
import DeleteModal from "./DeleteModal";

const DeleteModalPortal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onCancel={props.onCancel} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <DeleteModal onDelete={props.onDelete} onCancel={props.onCancel}/>,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
    )
};

export default DeleteModalPortal;