import React, { useState } from "react";
import { Avatar, Button, Divider, Typography } from "@mui/material";
import styles from "./Product.module.scss";
import { Link, useParams } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { Product } from "../../models/Product";
import { StoreName } from "../../dictionary";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

const ProductCard = inject(StoreName.CardSrore)(
  observer((props: any) => {
    const { products, removeCartProducts, addCartProducts, cartProducts } =
      props.CardStore;

    const params = useParams();

    const product = products.find(
      (item: Product) => item.id.toString() === params.id
    );

    const { id, name } = product;
    const subName = product.substance.name;

    const getCount = (num: number) => {
      if (!(cartProducts.length == 0)) {
        num = cartProducts.filter((element: Product) => element.id === id).length;
        return num;
      } else {
        return num = 0;
      }
    };
    const counCart = getCount(0);

    return (
      <div className={styles.productCard}>
        <div className={styles.cardGraphy}>
          <Typography variant="h2" gutterBottom component="div">
            {subName}
          </Typography>

          <Typography sx={{ pb: 5 }}>{name}</Typography>
          <Divider variant="middle" sx={{ borderColor: "white", my: "20px" }} />
          <div>
            <Avatar>{counCart}</Avatar>
            <Typography>Add card new products...</Typography>
            
            <AddBoxIcon
              sx={{color:"white", backgroundColor:"black", fontSize:"30px"}}
              onClick={() => addCartProducts(product)}
            />
            <IndeterminateCheckBoxIcon 
              sx={{color:"white", backgroundColor:"black", fontSize:"30px"}}
              onClick={() => removeCartProducts(id)}
            />
          </div>
           <Button size="large" sx={{mt:"100px"}} variant="contained"  component={Link} to="/">HOME</Button>
        </div>
       
      </div>
    );
  })
);

export default ProductCard;
