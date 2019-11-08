import React, {Fragment, useContext, useEffect} from 'react'
import {FirebaseContext} from '../context/firebase/firebaseContext'
import { Form, Notes, Loader, Alert } from '../components'

export const Home = () => {
  const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <Alert />
      <Form />

      <hr/>

      {loading
        ? <Loader />
        : <Notes notes={notes} onRemove={removeNote} />
      }
    </Fragment>
  )
}
