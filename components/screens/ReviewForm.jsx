import React from 'react'
import { globalStyles } from '../../styles/global'
import { View, Text, StyleSheet, Button, ImageBackground, Modal } from 'react-native'
import {Formik} from 'formik'
import { TextInput } from 'react-native-gesture-handler'


export default function ReviewForm() {
  return (
    <View style={globalStyles.container}>
      <Formik
      initialValues={{title:'', body:'', rating:''}}
      onSubmit={(values) => {}}
      >
        {(formikProps) => (
          <View>
            <TextInput
            style={globalStyles.input}
            placeholder='Review Title'
            onChangeText={formikProps.handleChange('title')}       // =====> handles the state for us behind the scenes !!!
            value={formikProps.values.title}                       // =====> two way data binding !!!
            />
          </View>
        )}
      </Formik>
    </View>
  )
}
