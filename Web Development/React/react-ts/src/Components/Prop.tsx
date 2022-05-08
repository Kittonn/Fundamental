import React from 'react'

interface AppProp  {
    text: string
    age?: number // optional
}

const Prop = ({text,age} : AppProp) => {
  return (
    <div>
        <div>{text}</div>
        <div>{age}</div>
    </div>
  )
}

export default Prop