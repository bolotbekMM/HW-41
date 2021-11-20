import React from 'react';
import ItemList from './ItemList';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <>
    <Card className={classes.users}>
      <ul>
        {props.users.map(user => 
          <ItemList key={user.id} onDelete={() => props.onDelete(user.id)}>
            {user.name} ({user.age} years old)
          </ItemList>
        )}
      </ul>
    </Card>
    </>
  );
};

export default UsersList;
