import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UsersCards({ users }) {
  return (
    <div>
      {users.map(user => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <Card style={{ width: '400px', height: '200px', marginBottom: '20px' }}>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.username}</Card.Text>
              <Button variant="primary">Get User's Info</Button>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default UsersCards;
