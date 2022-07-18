import React from "react";
import { Button, Typography } from "@mui/material";
import styles from "./Product.module.scss";
import { Delete, Edit } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { Product } from "../../models/Product";
import { StoreName } from "../../dictionary";

const ProductCard = inject(StoreName.CardSrore)(
  observer((props: any) => {
    const { products, removeProduct} = props.CardStore;

    const params = useParams();
    const product = products.find(
      (item: Product) => item.id.toString() === params.id
    );

    const { id, name } = product;
    const subName = product.substance.name;

    return (
      <div className={styles.productCard}>
        <div className={styles.cardGraphy}>
          <Typography
            className={styles.graphyfonth2}
            variant="h2"
            gutterBottom
            component="div"
          >
            {subName}
          </Typography>

          <Typography sx={{ pb: 5 }} className={styles.graphyfontp}>
            {name}
          </Typography>
          <div>
            <Button
              component={Link}
              to="/Home"
              onClick={() => removeProduct(id)}
              variant="contained"
              size="large"
              color="error"
              startIcon={<Delete />}
            >
              Delete
            </Button>
            <Button
              sx={{ mx: 2 }}
              variant="contained"
              size="large"
              color="secondary"
              endIcon={<Edit />}
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
    );
  })
);

export default ProductCard;
