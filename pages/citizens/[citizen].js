import React from 'react'
import Link from 'next/link'
import { CitizenLayout } from '../../components/layout'
import { getCitizen } from '../api/CitizenService'
import { getCitizenVehicles } from '../api/VehicleService'

export default function Citizen( { citizen, citizen_vehicles } ) {
  return (
    <>
      <CitizenLayout citizen={citizen.data} vehicles={citizen_vehicles} />
      <h2><Link href="/">Back To Home Page</Link></h2>
    </>
  )
}

export async function getServerSideProps( { params } ) {
  const citizen_data = await getCitizen(params.citizen)
  const vehicle_data = await getCitizenVehicles(params.citizen)
  return {
    props: {
      citizen: citizen_data.data,
      citizen_vehicles: vehicle_data.data.data
    }
  }
}
