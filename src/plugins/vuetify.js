/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'




// Composables
import { createVuetify } from 'vuetify'
0
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          '#eff2f1':'#eff2f1'
          
          
         
        },
      },
     dark: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          '#eff2f1':'#121212'
        },
      },
    },
  // },
  // theme: {
  //   defaultTheme: 'myCustomLightTheme',
  //   themes: {
  //     myCustomLightTheme,
  //   },
  },
})



