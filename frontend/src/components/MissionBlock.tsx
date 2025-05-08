import React from 'react'

const MissionBlock = ({title, deadline}) => {
  return (
    <>
        <h2>{title}</h2>
        <b>{typeof deadline === 'string' ? new Date(deadline).toLocaleString() : deadline.toLocaleString()}</b>
        <br></br>
    </>
  )
}

export default MissionBlock