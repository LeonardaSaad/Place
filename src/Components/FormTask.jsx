import styles from "../styles/FormTask.module.css"
import { Button } from '@mui/material'
import React from 'react'

const FormTask = () => {
   const styles = theme => ({
      textField: {
         width: '90%',
         marginLeft: 'auto',
         marginRight: 'auto',
         paddingBottom: 0,
         marginTop: 0,
         fontWeight: 500
      },
      input: {
         color: 'white'
      }
   });

   return (
      <div className={styles.container}>
         <input className={styles.text} type="text" name="text" id="text" />
         <Button
            width="100%"
            variant="contained"
            style={{
               backgroundColor: "#6439BF",
               fontSize: "16px"
            }}
         >
            ADD
         </Button>
      </div>
   )
}

export default FormTask