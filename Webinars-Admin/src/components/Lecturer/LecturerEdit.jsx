import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

// material-ui/core
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, Button } from '@material-ui/core'

// components
import LinkWrapper from 'components/Link/LinkWrapper'
import TextFieldWrapper from 'components/Input/TextFieldWrapper'
import AlertResponse from 'components/AlertResponse/AlertResponse'

// utils
import api from 'utils/api'

const useStyle = makeStyles(theme => ({
  container: {
    padding: theme.spacing(1),
  },
  submit: {
    marginRight: theme.spacing(1),
  },
  fileInput: {
    display: 'none',
  },
  featuredImage: {
    maxWidth: '100%',
    maxHeight: '200px',
  },
}))

function LecturerEdit() {
  const classes = useStyle()
  const history = useHistory()
  const { id } = useParams()

  const [serverError, setServerError] = useState(null)
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const getLecturer = () => {
      console.log('ID', id)
      api
        .getLecturer({
          urlParams: {
            id,
          },
        })
        .then(res => {
          const lecturer = res.data
          setName(lecturer.name)
          setPhoneNumber(lecturer.phoneNumber)
          setEmail(lecturer.email)
          setUsername(lecturer.username)
          setPassword(lecturer.password)
        })
        .catch(err => {
          if (err.response && err.response.data) {
            setServerError(err.response.data.message)
          }
        })
    }

    if (id) {
      getLecturer()
    }
  }, [id])

  const handleSubmit = event => {
    event.preventDefault()
    console.log('inja')
    setServerError(null)
    api
      .patchPostLecturer({
        urlParams: { id },
        data: {
          name,
          phoneNumber,
          email,
          username,
          password,
        },
      })
      .then(() => {
        console.log('here?')
        history.push(`/lecturer`)
      })
      .catch(err => {
        if (err.response && err.response.data) {
          setServerError(err.response.data.message)
        }
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Paper className={classes.container}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h5">
                {id ? `ویرایش  سخنران` : ` سخنران جدید`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextFieldWrapper
                label="نام"
                id="name"
                name="name"
                value={name}
                onChange={event => {
                  setName(event.target.value)
                }}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextFieldWrapper
                label="تلفن همراه"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={event => {
                  setPhoneNumber(event.target.value)
                }}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextFieldWrapper
                label="پست الکترونیک"
                id="email"
                name="email"
                value={email}
                onChange={event => {
                  setEmail(event.target.value)
                }}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextFieldWrapper
                label="نام کاربری"
                id="username"
                name="username"
                value={username}
                onChange={event => {
                  setUsername(event.target.value)
                }}
                required
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextFieldWrapper
                label="رمز عبور"
                id="password"
                name="password"
                value={password}
                onChange={event => {
                  setPassword(event.target.value)
                }}
                required
                type="password"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AlertResponse message={serverError} />
            </Grid>
            <Grid item xs={11}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                ثبت
              </Button>
              <LinkWrapper to="/lecturer">
                <Button variant="contained" color="default">
                  انصراف
                </Button>
              </LinkWrapper>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </>
  )
}
export default LecturerEdit