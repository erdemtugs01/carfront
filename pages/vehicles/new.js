import React, { useState } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core'
import { createVehicle } from '../api/VehicleService'
import styles from '../../styles/Home.module.css'

const useStyles = makeStyles((theme) => ({
  col_25: {
    float: "left",
    width: "25%",
    marginTop: "15px"
  },
  col_75: {
    width: "75%",
    marginTop: "6px"
  },
  row: {
    width: "100%",
    fontSize: "1.2rem",
    content: "",
    display: "table",
    clear: "both"
  },
  submit: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    float: "center"
  },
  label: {
    padding: "12px 12px 12px 0",
    display: "inline-block"
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "1000px",
    resize: "vertical"
  },
  box: {
    flexBasis: "45%",
    textAlign: "left",
    textDecoration: "none",
    border: "1px solid #eaeaea",
    borderRadius: "10px",
    transition: "color 0.15s ease, border-color 0.15s ease",
    margin: "0 0 1rem 0",
    fontSize: "1.5rem",
    lineHeight: 1.5,
    width: "30%"
  }
}))

export default function NewVehicle() {

  const classes = useStyles()
  const [formData, setFormData] = useState({
    vin: '',
    plate_no: '',
    make: '',
    model: '',
    v_type: '',
    manufactured: '',
    imported: ''
  })

  const handleSubmit = (event) => {
    createVehicle(formData)
    alert('done hehehhe', formData.plate_no)
    event.preventDefault()
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(name, value)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={classes.box}>
        <div className={classes.row}>
          <div className={classes.col_25}>
            <label>Арлын дугаар: </label>
          </div>
          <div className={classes.col_75}>
            <input
              // className={classes.input}
              type="text"
              name="vin"
              placeholder="Арлын дугаар"
              value={formData.vin}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col_25}>
            <label>Улсын дугаар: </label>
          </div>
          <div className={classes.col_75}>
            <input
              // className={classes.input}
              type="text"
              name="plate_no"
              placeholder="Улсын дугаар"
              value={formData.plate_no}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col_25}>
            <label>Үйлдвэрлэгч: </label>
          </div>
          <div className={classes.col_75}>
            <input
              // className={classes.input}
              type="text"
              name="make"
              placeholder="Үйлдвэрлэгч"
              value={formData.make}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col_25}>
            <label>Загвар: </label>
          </div>
          <div className={classes.col_75}>
            <input
              // className={classes.input}
              type="text"
              name="model"
              placeholder="Загвар"
              value={formData.model}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col_25}>
            <label>Шаардах жолооны үнэмлэх: </label>
          </div>
          <div className={classes.col_75}>
            <input
              // className={classes.input}
              type="text"
              name="v_type"
              placeholder="Жолооны үнэмлэх"
              value={formData.v_type}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col_25}>
            <label>Үйлдвэрлэсэн он: </label>
          </div>
          <div className={classes.col_75}>
            <input
              // className={classes.input}
              type="text"
              name="manufactured"
              placeholder="Үйлдвэрлэсэн он"
              value={formData.manufactured}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col_25}>
            <label>Орж ирсэн огноо: </label>
          </div>
          <div className={classes.col_75}>
            <input
              type="text"
              name="imported"
              placeholder="Орж ирсэн огноо"
              value={formData.imported}
              onChange={handleChange}
            />
          </div>
        </div>
        <input type="Submit" className={classes.submit}></input>
      </form>
      <h2><Link href="/">Back To Home Page</Link></h2>
    </div>
  )
}
