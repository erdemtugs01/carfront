import React from 'react'
import Link from 'next/link'
import { VehicleLayout } from '../../components/layout'
import { getVehicle } from '../api/VehicleService'

export default function Vehicle( { vehicle } ) {
  return (
    <>
      <VehicleLayout vehicle={vehicle.data} />
      <h2><Link href="/">Back To Home Page</Link></h2>
    </>
  )
}

export async function getServerSideProps( { params } ) {
  const res = await getVehicle(params.vehicle)
  return {
    props: {
      vehicle: res.data
    }
  }
}
