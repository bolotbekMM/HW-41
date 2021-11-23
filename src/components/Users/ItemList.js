import React, {useState} from 'react'
import Button from '../UI/Button'
import classes from '../UI/Button.module.css'
import DeleteModalPortal from '../Modals/DeleteModalPortal'


function ItemList(props) {
    const [showhide, setShowHide] = useState(false)

    
    return (
        <li>
            {props.children}
            <Button className={classes.button}  onClick={() => setShowHide(true)} >Delete</Button>
            {showhide && <DeleteModalPortal  onCancel={()=> setShowHide(false)} onDelete={() =>  props.onDelete(props.id)}/>}
            
        </li>
    )
};


export default ItemList;
