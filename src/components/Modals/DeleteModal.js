import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './ErrorModal.module.css';

const DeleteModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Delete this user?</h2>
        </header>
        <footer className={classes.actions}>
            <Button onClick={props.onDelete}>Delete</Button>
            <Button onClick={props.onCancel}>Cancel</Button>
        </footer>
      </Card>
    </div>
  );
};

export default DeleteModal;
