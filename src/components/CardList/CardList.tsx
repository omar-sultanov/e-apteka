import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import Card from "../Card/Card";
import styles from "./CardList.module.scss";
import { Product } from "@models/Product";
import { ServicesNames, StoresNames } from "../../dictionary";
import { Pagination, Stack } from "@mui/material";
import usePagination from './Pagination'

const CardList = inject(
  StoresNames.CardStore,
  ServicesNames.ProductService
)(
  observer((props: any) => {
    const { products, addCartProducts } = props.CardStore;

    const [fetchStatus, setFetchStatus] = useState(true);
    useEffect(() => {
      props.ProductService.getPills().finally(() => {
        setFetchStatus(false);
      });
    localStorage.setItem("products", JSON.stringify(products));
    },[fetchStatus]);
    
    const [page, setPage] = useState(1);
    const PER_PAGE = 10;
  
    const count = Math.ceil(products.length / PER_PAGE);
    const _DATA = usePagination(products, PER_PAGE);
  
    const handleChange = (e: React.ChangeEvent<unknown>, value:number) => {
      setPage(value);
      _DATA.jump(value);
    };

    return (
      <div className={styles.CardList}>
        <Stack spacing={2}>
          <Pagination className={styles.stack} count={count} page={page} onChange={handleChange}/>
        </Stack>
        <div className={styles.Cards}>
          {_DATA.currentData().map((product: Product) => (
            <Card
              key={product.id}
              product={product}
              addCartProducts={addCartProducts}
            />
          ))}
        </div>
      </div>
    );
  })
);

export default CardList;
