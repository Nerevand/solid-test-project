import React from 'react'

type SomeComponentProps = {
  content: JSX.Element
}

const SomeComponent: React.FC<SomeComponentProps> = ({ content }) => {

  return (
    <div>
      {content}
    </div>
  )
}

export default SomeComponent
