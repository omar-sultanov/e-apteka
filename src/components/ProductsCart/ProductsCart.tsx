import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import { inject, observer } from "mobx-react";
import { StoreName } from "../../dictionary";
import { Button, Typography } from "@mui/material";
import { Product } from "../../models/Product";
import { Link } from "react-router-dom";
import styles from "./ProductsCart.module.scss";

const FolderList = inject(StoreName.CardSrore)(
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
        <Typography variant="h5" sx={{ textAlign: "center", my: "10px" }}>
          Product in Cart
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
        <Button  variant="outlined"  component={Link} to="/">HOME</Button>
      </div>
    );
  })
);
export default FolderList;
