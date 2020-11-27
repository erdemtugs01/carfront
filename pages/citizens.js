import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

import { getAllCitizen } from './api/CitizenService'

export default function Citizens() {

  const [citizens, setCitizens] = useState([])

  useEffect(() => {
    getAllCitizen().then( response => setCitizens(response.data.data) )
  }, [])

  return (
    <div className={styles.container}>
      <h1>Citizen Page</h1>
      <div className={styles.grid}>
        {citizens.map( citizen => 
          <Link as={`/citizens/${citizen.id}`} href={`/citizens/${citizen.id}`} key={citizen.id}>
            <a className={styles.card}>
              <h3>{`${citizen.attributes.register_no}`}</h3>
              <p>{`${citizen.attributes.last_name} ${citizen.attributes.first_name}`}</p>
            </a>
          </Link>
        )}
        </div>
      <h2><Link href="/">Back To Home Page</Link></h2>
    </div>
  )
}
