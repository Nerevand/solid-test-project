import React from 'react'

type UserProps = {
  name: string
}

const User: React.FC<UserProps> = ({ name }) => {
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