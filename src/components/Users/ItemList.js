import React, {useState} from 'react'
import Button from '../UI/Button'
import DeleteModal from '../UI/DeleteModal'
import classes from '../UI/Button.module.css'


function ItemList(props) {
    const [showhide, setShowHide] = useState(false)

    
    return (
        <li>
            {props.children}
            <Button className={classes.button}  onClick={() => setShowHide(true)} >Delete</Button>
            {showhide && <DeleteModal  onCancel={()=> setShowHide(false)} onDelete={() =>  props.onDelete(props.id)}/>}
            
        </li>
    )
};


export default ItemList;
