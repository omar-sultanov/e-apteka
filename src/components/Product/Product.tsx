import React from "react";
import { Avatar, Button, Divider, Typography } from "@mui/material";
import styles from "./Product.module.scss";
import { Link, useParams } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { Product } from "@models/Product";
import { ServicesNames, StoresNames } from "../../dictionary";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const ProductCard = inject(
  StoresNames.CardStore,
  ServicesNames.ProductService
)(
  observer((props: any) => {
    const { removeCartProducts, addCartProducts, cartProducts } =
      props.CardStore;

    const products = JSON.parse(localStorage.getItem("products") || "{}");
    const params = useParams();
    const product = products.find(
      (item: Product) => item.id.toString() === params.id
    );
    const { id, name } = product;
    const subName = product.substance.name;

    const getCount = (num: number) => {
      if (!(cartProducts.length == 0)) {
        num = cartProducts.filter(
          (element: Product) => element.id === id
        ).length;
        return num;
      } else {
        return (num = 0);
      }
    };
    const counCart = getCount(0);

    return (
      <div className={styles.productCard}>
        <div className={styles.cardGraphy}>
          <Typography variant="h2" gutterBottom component="div">
            {subName}
          </Typography>

          <Typography variant="h4">{name}</Typography>
          <Divider variant="middle" sx={{ mt: "25px" }} />
          <div>
            <Typography variant="body2">Добавить новые продукты...</Typography>
            <div className={styles.btnGroup}>
              <AddBoxIcon className={styles.BoxIcon}
                onClick={() => addCartProducts(product)}
              />
              <Avatar className={styles.Avatar} variant="square">{counCart}</Avatar>
              <IndeterminateCheckBoxIcon className={styles.BoxIcon}
                onClick={() => removeCartProducts(id)}
              />
            </div>
          </div>
          <Button 
            size="large"
            sx={{ mt: "30px" }}
            variant="contained"
            component={Link}
            to="/"
          >
            Главное
          </Button>
        </div>
      </div>
    );
  })
);

export default ProductCard;
