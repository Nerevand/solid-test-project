import React from 'react'

import { UserDetailProps } from './I'

type AdminProps = {
  name: string
}

const Admin: React.FC<AdminProps> = ({ name }) => {
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