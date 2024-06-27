import React from 'react'
import { Handle } from 'reactflow'; 

export const Handler = (props) => {
  return (
    <Handle 
      style={{
        width: 7, 
        height: 7, 
        background: "white", 
        border: "2px solid black",
        ...(props.type === 'source' ? {border: "2px solid #F38181"} : {border: "2px solid #002651"}), 
        ...(props.top !== undefined ? {top: props.top} : {})
      }}
      {...props}
    />
  )
}
