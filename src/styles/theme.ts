import { createTheme } from '@material-ui/core/styles';
import { color } from '@mui/system';

import './fonts/fonts.scss'
const theme = createTheme({

    typography: {
      fontFamily:'Poppins Regular',
      h5: {
        mr: 2,
        fontWeight: 400,
        letterSpacing: ".1rem",
        fontSize: 30,
        color: "inherit",
        textDecoration: "none",
        fontFamily:'Poppins Regular',
        
      },
      h6: {
        fontWeight: 400,
        fontFamily:'Poppins Regular'
      },
      h2: {
        fontWeight: 400,
        fontFamily:'Poppins Regular',
        color:"black"
      },
      h4: {
        fontWeight: 400,
        fontFamily:'Poppins Regular',
        color:"black"
      },
      body2:{
        color:"black"
      }
    }
  });
  
  export default theme;