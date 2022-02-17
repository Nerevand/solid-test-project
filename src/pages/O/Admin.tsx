import React from 'react'

import { UserDetailProps } from './O'

const Admin: React.FC<UserDetailProps> = ({ name }) => {
  return (
    <li>
      <p>
        name: {name}
      </p>
      <p>
        Hello admin
      </p>
    </li>
  )
}

export default Admin