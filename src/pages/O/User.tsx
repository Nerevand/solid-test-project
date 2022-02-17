import React from 'react'

import { UserDetailProps } from './O'

const User: React.FC<UserDetailProps> = ({ name }) => {
  return (
    <li>
      <p>
        name: {name}
      </p>
      <p>
        Hello user
      </p>
    </li>
  )
}

export default User