import React, { useState, useEffect } from 'react'

function Kingdoms() {
    const [kingdoms, setKingdoms] = useState([]);

    useEffect(() => {}, []);

  return (
    <div>
        <h1>Kingdom's</h1>
        <input type="select" />
        <div>
            {kingdoms.map((kingdom) => (
              <KingdomCard 
                key={kingdom.id} 
                name={kingdom.name} 
                asset={kingdom.asset} 
            />
            ))}
        </div>
    </div>
  )
}

export default Kingdoms;