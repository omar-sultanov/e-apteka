import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./SignForm.module.scss";
import { Button, FormControl, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { StoresNames } from "../../dictionary";

const AddTextFields = inject(StoresNames.AppStore)(
  observer((props: any) => {
    const { authToken } = props.AppStore;
    const [key, setKey] = useState<string>("");

    const onChangeInput = (e: any) => {
      setKey(e.target.value);
    };

    // const authToken=()=>{
    //     localStorage.setItem('token',key)
    // }

    return (
      <div>
        <Box>
          <div className={styles.auth}>
            <Typography
              className="mx-auto mt-2"
              variant="h6"
              gutterBottom
              component="div"
            >
              Available authorizations
            </Typography>
            <TextField
              fullWidth
              onChange={(e: any) => onChangeInput(e)}
              label="Token"
              id="outlined-size-normal"
            />
            <Typography
              className={styles.graphy}
              variant="body2"
              gutterBottom
              component="div"
            >
              <b>api_key: </b>
              eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluIiwiaW
              QiOjgsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYyNzI5MjAyOX0.smA9a5v47rs-oG2loD1jR5Zd5RlGqmb0XN0KWjniyKo
            </Typography>
            <Button
              className={styles.btn}
              component={Link}
              to="/"
              variant="outlined"
              onClick={()=>authToken(key)}
            >
              Авторизовать
            </Button>
          </div>
        </Box>
      </div>
    );
  })
);
export default AddTextFields;
