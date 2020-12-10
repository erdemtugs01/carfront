import Link from 'next/link'
import styles from '../styles/Home.module.css'

function CitizenLayout({ citizen, vehicles }) {
  return (
    <div className={styles.container}>
      <div>
        <h3>{citizen.attributes.register_no}</h3>
        <p>
          Citizen FirstName: {citizen.attributes.first_name} <br />
          Citizen MiddleName: {citizen.attributes.middle_name} <br />
          Citizen LastName: {citizen.attributes.last_name}</p>
      </div>
      <div>
        <h4>This citizens cars</h4>
        <div className={styles.grid}>
        {vehicles.map( vehicle => 
          <Link href={`/vehicles/${vehicle.id}`} key={vehicle.id}>
            <a className={styles.card}>
              <h3>{`${vehicle.attributes.plate_no}`}</h3>
              <p>{`${vehicle.attributes.vin} ${vehicle.attributes.make} ${vehicle.attributes.model}`}</p>
            </a>
          </Link>
        )}
        </div>
      </div>
    </div>
  )
}

function VehicleLayout({ vehicle }) {
  return (
    <div className={styles.container}>
      <div>
        <h3>{vehicle.attributes.plate_no}</h3>
        <p>
          Vehicle VIN: {vehicle.attributes.vin} <br />
          Vehicle Make: {vehicle.attributes.make} <br />
          Vehicle Model: {vehicle.attributes.model} <br />
          Vehicle Manufactured in: {vehicle.attributes.manufactured} <br />
          Vehicle Imported in: {vehicle.attributes.imported}
        </p>
      </div>
    </div>
  )
}

export { CitizenLayout, VehicleLayout }
