import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { VehicleLayout } from '../../components/layout'
import { getVehicle } from '../api/VehicleService'
import { getVehicleService } from '../api/VehicleServicesService'

export default function Vehicle( { vehicle, service } ) {
  const services = service.data
  const calculateDate = (param) => {
    const date = new Date(param)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    return `${year} - ${month} - ${day}`
  }

  return (
    <div className={styles.container}>
      <VehicleLayout vehicle={vehicle.data} />
        {
          services ?
            <table>
              <tr>
                <th>Үйлчилгээ/Засварын мэдээлэл</th>
                <th>Тайлбар</th>
                <th>Огноо</th>
              </tr>
              {
                services.map(service => {
                  return(
                    <tr key={service.attributes.updated_at}>
                    <th>{service.attributes.s_type}</th>
                    <th>{service.attributes.description}</th>
                    <th>{calculateDate(service.attributes.updated_at)}</th>
                  </tr>
                  )
                })
              }
            </table>
            :
            <h3>Энэ автомашины үйлчилгээ/засварын мэдээлэл олдсонгүй</h3>
        }
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
