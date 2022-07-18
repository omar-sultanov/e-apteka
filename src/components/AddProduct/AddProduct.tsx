import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./AddProduct.module.scss";
import { Button, FormControl, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { StoreName } from "../../dictionary";
import { IProductData } from "../../models/Product";


const AddTextFields = inject(StoreName.CardSrore)(
  observer((props: any) => {

    const initialFormValues = { name: "", description: "" };
    const { addProduct} = props.CardStore;
    const [form, setForm] = useState<IProductData>(initialFormValues);

    const onChangeInput = (e: { target: { name: string; value: string } }) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = () => {
      if (form.name === "" || form.description === "") {
        return false;
      }
      addProduct(form)
    };

    return (
      <div className="AddProduct">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "65ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className={styles.textField}>
            <FormControl>
              <Typography
                sx={{ mt: "20px", mx: "auto" }}
                variant="h3"
                gutterBottom
                component="div"
              >
                Add new product
              </Typography>
              <TextField
                id="outlined-multiline-flexible"
                label="Name"
                multiline
                name="name"
                onChange={(e: any) => onChangeInput(e)}
              />
              <TextField
                id="outlined-textarea"
                label="Description"
                name="description"
                onChange={(e: any) => onChangeInput(e)}
                multiline
              />
              <Button
                component={Link}
                to="/Home/"
                sx={{ width: "120px", mx: "auto" }}
                color="error"
                variant="contained"
                onClick={onSubmit}
              >
                Add
              </Button>
            </FormControl>
          </div>
        </Box>
      </div>
    );
  })
);
export default AddTextFields;
