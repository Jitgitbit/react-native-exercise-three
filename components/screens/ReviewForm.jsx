import React from 'react'
import { globalStyles } from '../../styles/global'
import { View, Text, StyleSheet, Button, ImageBackground, Modal } from 'react-native'
import {Formik} from 'formik'


export default function ReviewForm() {
  return (
    <View style={globalStyles.container}>
      <Formik
      initialValues={{title:'', body:'', rating:''}}
      onSubmit={(values) => {}}>
        
      </Formik>
    </View>
  )
}
