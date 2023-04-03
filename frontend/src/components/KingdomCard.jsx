import React from 'react'

function KingdomCard( { name, asset} ) {
  return (
    <div>
        <h1>Kingdom {name}</h1>
        <ul>
            <li>{asset}</li>
            <li>{asset}</li>
            <li>{asset}</li>
        </ul>
    </div>
  )
}

export default KingdomCard