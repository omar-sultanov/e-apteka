import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ReadMoreRoundedIcon from "@mui/icons-material/ReadMoreRounded";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button, Divider } from "@mui/material";
import { Product } from "../../models/Product";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

interface ProductProp {
  product: Product;
}
const ImgMediaCard = (props: ProductProp) => {
  const { id, name } = props.product;
  const subName = props.product.substance.name;

  return (
    <Card className={styles.Card} sx={{ maxWidth: 260, boxShadow: 3 }}>
      <CardContent>
        <Typography
          className={styles.CardGraphy}
          gutterBottom
          variant="h5"
          component="div"
        >
          {subName}
        </Typography>
        <Typography className={styles.CardGraphy} variant="body2">
          {name}
        </Typography>
      </CardContent>
      <Divider light />
      <CardActions>
        <Button
          variant="contained"
          size="small"
          color="success"
          aria-label="add to shopping cart"
        >
          <AddShoppingCartIcon />
        </Button>
        <Button
          component={Link}
          to={`/product/${id}`}
          variant="outlined"
          size="small"
          color="error"
          aria-label="add more info"
        >
          <ReadMoreRoundedIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
export default ImgMediaCard;
