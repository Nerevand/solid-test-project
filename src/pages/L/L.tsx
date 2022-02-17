import React from 'react'

import SomeComponent from './SomeComponent'

const LiskovPrinciple: React.FC = () => {
  const componentAsProp = <p> component as prop </p> //valid value

  // const someInvalidValue = {  //invalid value
  //   name: 'User'
  // }

  return (
    <SomeComponent content={componentAsProp} />
  )
}

export default LiskovPrinciple