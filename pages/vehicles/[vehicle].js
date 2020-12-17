import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { VehicleLayout } from '../../components/layout'
import { getVehicle } from '../api/VehicleService'
import { getVehicleService } from '../api/VehicleServicesService'

export default function Vehicle( { vehicle, service } ) {
  const services = service.data
  const calculateDate = (rails_date) => {
    const date = new Date(rails_date)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    return `${year} - ${month} - ${day}`
  }

  return (
    <div className={styles.container}>
      <VehicleLayout vehicle={vehicle.data} />
        {
          services.length === 0 ?
            <h3>Энэ автомашины үйлчилгээ/засварын мэдээлэл олдсонгүй</h3>
            :
            <table>
              <tr>
                <th>Үйлчилгээ/Засварын мэдээлэл</th>
                <th>Тайлбар</th>
                <th>Огноо</th>
              </tr>
              {
                services.map(({attributes}) => {
                  return(
                    <tr key={attributes.updated_at}>
                    <th>{attributes.s_type}</th>
                    <th>{attributes.description}</th>
                    <th>{!!attributes.service_date ? calculateDate(attributes.service_date) : calculateDate(attributes.updated_at)}</th>
                  </tr>
                  )
                })
              }
            </table>

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
