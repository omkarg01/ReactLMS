import React from 'react'

const ListComponent = () => {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ];

  return (
    <div>{items.map((each)=>(
        <p key={each.id}>{each.name}</p>
    ))}</div>
  )
}

export default ListComponent