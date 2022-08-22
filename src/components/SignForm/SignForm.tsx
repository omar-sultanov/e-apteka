import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./SignForm.module.scss";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { StoresNames } from "../../dictionary";

const AddTextFields = inject(StoresNames.AppStore)(
  observer((props: any) => {

    const [key, setKey] = useState({ email: "", password: "" });
    const onChangeInput = (e: any) => {
      setKey({ ...key, [e.target.name]: e.target.value });
    };

    const submitHandler = (e: any) => {
      if (key.email.trim() && key.password.trim()) {
        props.AppService.logIn(key.email, key.password);
      }
    };
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
              name="email"
              value={key.email}
              fullWidth
              onChange={(e: any) => onChangeInput(e)}
              label="Email"
              id="outlined-size-normal"
            />

            <TextField
              name="password"
              value={key.password}
              fullWidth
              onChange={(e: any) => onChangeInput(e)}
              label="Password"
              id="outlined-size-normal"
            />
            <Button
              className={styles.btn}
              component={Link}
              to="/"
              variant="outlined"
              onClick={(e: any) => submitHandler(e)}
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
