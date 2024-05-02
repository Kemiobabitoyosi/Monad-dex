import React from 'react'

const Token = ({className, children}) => {
  console.log(children);
  return (
  <div className={className}>
    {children} 
  </div>
 
  )
}

export default Token