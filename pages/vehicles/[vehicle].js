import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { VehicleLayout } from '../../components/layout'
import { getVehicle } from '../api/VehicleService'
import { getVehicleService } from '../api/VehicleServicesService'

export default function Vehicle( { vehicle, service } ) {
  const serviceType = service.included
  const services = service.data
  console.log(services)
  // console.log(serviceType)
  return (
    <div className={styles.container}>
      <VehicleLayout vehicle={vehicle.data} />
      {/* {service ?
        (
          serviceType.map(sType, i => {
            return (
              <>
                <p key={i}>Service Type: {sType.attributes.name}</p>
                <p key={i}>Description: {}</p>
              </>
            )
          })
          
        ) :
        <h2>No services made to this ummmmm</h2>
      } */}
      <h2><Link href="/">Back To Home Page</Link></h2>
    </div>
  )
}

export async function getServerSideProps( { params } ) {
  const vehicle = await getVehicle(params.vehicle)
  const service = await getVehicleService(params.vehicle)
  return {
    props: {
      vehicle: vehicle.data,
      service: service.data
    }
  }
}
