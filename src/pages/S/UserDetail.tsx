import React from 'react'

import { UserProps } from '../../typedefs'

const UserDetail: React.FC<UserProps> = (props) => {
  const { name, email } = props

  return (
    <li style={{ margin: '5px' }}>
      name:{" "} <span>{name}</span>
      <br />
      email:{" "}<span>{email}</span>
    </li>
  );
};

export default UserDetail
