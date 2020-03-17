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
      onSubmit={(values) => {
        console.log(values)
      }}
      >
        {(formikProps) => (
          <View>
            <TextInput
            style={globalStyles.input}
            placeholder='Review Title'
            onChangeText={formikProps.handleChange('title')}       // =====> handles the state for us behind the scenes !!!
            value={formikProps.values.title}                       // =====> two way data binding !!!
            />
            <TextInput
            multiline
            style={globalStyles.input}
            placeholder='Review'
            onChangeText={formikProps.handleChange('body')}       // =====> handles the state for us behind the scenes !!!
            value={formikProps.values.body}                       // =====> two way data binding !!!
            />
            <TextInput
            style={globalStyles.input}
            placeholder='Rating (1-5)'
            onChangeText={formikProps.handleChange('rating')}       // =====> handles the state for us behind the scenes !!!
            value={formikProps.values.rating}                       // =====> two way data binding !!!
            keyboardType='numeric'
            />
            <Button title='submit' color='maroon' onPress={formikProps.handleSubmit}/>
          </View>
        )}
      </Formik>
    </View>
  )
}
