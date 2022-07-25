import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import { inject, observer } from "mobx-react";
import { StoresNames } from "../../dictionary";
import { Button, Typography } from "@mui/material";
import { Product } from "../../models/Product";
import { Link } from "react-router-dom";
import styles from "./ProductsCart.module.scss";

const FolderList = inject(StoresNames.CardStore)(
  observer((props: any) => {
    const { removeCartProducts, cartProducts } = props.CardStore;

    const cartList = cartProducts.filter(
      (item: Product, index: any) => cartProducts.indexOf(item) === index
    );

    const getCountBadge = (index: number) => {
      const num = cartProducts.filter((item: Product) => item.id === index);
      return num.length;
    };

    return (
      <div className={styles.Cart}>
        <Typography variant="h5" className={styles.graphy} >
          Добавить в Корзину
        </Typography>
        <List sx={{ bgcolor: "background.paper" }}>
          {cartList.map((product: Product, i: number) => (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar>{getCountBadge(product.id)}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={product.substance.name}
                secondary={product.name}
              />
              <Avatar sx={{ backgroundColor: "red" }}>
                <DeleteIcon onClick={() => removeCartProducts(product.id)} />
              </Avatar>
            </ListItem>
          ))}
          
        </List>
        <Button className={styles.btn} variant="outlined"  component={Link} to="/">ГЛАВНОЕ</Button>
      </div>
    );
  })
);
export default FolderList;
