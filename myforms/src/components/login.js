import React from 'react'
import { Grid, Paper, Avatar, TextField, Typography, Button, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlinedIcon';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik,Form,Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const Login=({handleChange})=>{

    const paperStyle={padding :20,height:'73vh',width:300,margin:"0 auto"}
    const avatarStyle={backgroundColor: "green"}
    const btnstyle={margin:'8px 0'}
    const initialValues={
        username:'',
        password:'',
        remeber:false

    }
    const validationSchema=Yup.object().shape({
        username:Yup.string().email('please enter valid email').required("Required")
        password:Yup.string().required("Required")
       
    })
    const onSubmit=(values,props)=>{
        console.log(values)
        setTimeout(()=>{
            props.resetForm()
            props.setSubmitting(false)
        },2000)

        console.log(props)
    }
   
    return(
        <Grid>
          <Paper style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                <h2>Sing In</h2>
            </Grid>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {(props)=>(
                    <Form>
                        {console.log(props)}
                        <Field as={TextField} label='Username' name="username" 
                        placeholder='Enter username' fullWidth required 
                        helperText={<ErrorMessage name="username"/>}
                        />
                    <Field as={TextField} label='Password' name="password" 
                    placeholder='Enter password' type='password' fullWidth required
                    helperText={<ErrorMessage name="password" />} />
                    <Field as={FormControlLabel}
                    name='remember'
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remeber me"
                    />
                    <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting} 
                    style={btnstyle} fullWidth>{props.isSubmitting?"Loading":"Sign in"}</Button>
                        {console.log(props)}
                    </Form>
                 )}
            </Formik>
            <Typography> Do you have an account ?
                <Link href="#" onClick={()=>handleChange("event",1)}>
                    Sign up
                </Link>
            </Typography>
          </Paper>  
        </Grid>
    )
}

export default Login