import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

import { getAllVehicles } from './api/VehicleService'

export default function Vehicles() {

  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    getAllVehicles().then( response => setVehicles(response.data.data) )
    
  }, [])

  return (
    <div className={styles.container}>
      <h1>Vehicles Page</h1>
      <div className={styles.grid}>
        {vehicles.map( vehicle => 
          <Link as={`/vehicles/${vehicle.id}`} href={`/vehicles/${vehicle.id}`} key={vehicle.id}>
            <a className={styles.card}>
              <h3>{`${vehicle.attributes.plate_no}`}</h3>
              <p>{`${vehicle.attributes.make} ${vehicle.attributes.model}`}</p>
            </a>
          </Link>
        )}
        </div>
      <h2><Link href="/">Back To Home Page</Link></h2>
      <h2><Link href="/vehicles/new">Add New Vehicle</Link></h2>
    </div>
  )
}
