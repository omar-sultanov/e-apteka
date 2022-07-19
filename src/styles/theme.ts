import { createTheme } from '@material-ui/core/styles';

import './fonts/fonts.scss'
const theme = createTheme({

    typography: {
      fontFamily:'Poppins Regular',
      h5: {
        mr: 2,
        fontWeight: 700,
        letterSpacing: ".1rem",
        fontSize: 30,
        color: "inherit",
        textDecoration: "none",
        fontFamily:'Poppins Bold',
        
      },
      h6: {
        fontWeight: 400,
        fontFamily:'Poppins Regular'
      },
      body2:{

      }
    }
  });
  
  export default theme;