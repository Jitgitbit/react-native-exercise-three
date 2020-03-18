import React from 'react'
import { globalStyles } from '../../styles/global'
import { View, Text, StyleSheet, Button, ImageBackground, Modal } from 'react-native'
import {Formik, validateYupSchema} from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import * as yup from 'yup';
import FlatButton from '../shared/FlatButton'


const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(12),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
})


export default function ReviewForm({addReview}) {
  return (
    <View style={globalStyles.container}>
      <Formik
      initialValues={{title:'', body:'', rating:''}}
      validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();                       //==========>> We actually don't need this here because we already reset the form by 
        addReview(values)                          //==========>> using onPress={() => setModalOpen(false)} , BUT it is nice to know and
        console.log(values)                        //==========>> use when the form is not in a modal f.e., but on the same screen !!!!!
      }}
      >
        {(formikProps) => (
          <View>
            <TextInput
            style={globalStyles.input}
            placeholder='Review Title'
            onChangeText={formikProps.handleChange('title')}       // =====> handles the state for us behind the scenes !!!
            value={formikProps.values.title}                       // =====> two way data binding !!!
            onBlur={formikProps.handleBlur('title')}               // =====> onBlur, more real-time validation !!!!!
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>
            <TextInput
            multiline minHeight={80}
            style={globalStyles.input}
            placeholder='Review'
            onChangeText={formikProps.handleChange('body')}       // =====> handles the state for us behind the scenes !!!
            value={formikProps.values.body}                       // =====> two way data binding !!!
            onBlur={formikProps.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.body && formikProps.errors.body}</Text>
            <TextInput
            style={globalStyles.input}
            placeholder='Rating (1-5)'
            onChangeText={formikProps.handleChange('rating')}       // =====> handles the state for us behind the scenes !!!
            value={formikProps.values.rating}                       // =====> two way data binding !!!
            onBlur={formikProps.handleBlur('rating')}
            keyboardType='numeric'
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.rating && formikProps.errors.rating}</Text>
            {/* <Button title='submit' color='maroon' onPress={formikProps.handleSubmit}/> */}
            <FlatButton text='submit' onPress={formikProps.handleSubmit}/>
          </View>
        )}
      </Formik>
    </View>
  )
}
