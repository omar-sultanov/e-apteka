import React from 'react';
import { inject, observer } from 'mobx-react';
import Card from '../Card/Card'
import styles from './CardList.module.scss'
import { Product } from '../../models/Product';
import { StoreName } from '../../dictionary'
const CardList = inject(StoreName.CardSrore)(observer((props:any) => {
  const { products} = props.CardStore;

  return (
    <div className={styles.CardList}>
      {products.map((product:Product)=>(
        <Card key={product.id} product={product}/>
        ))}
    </div>
  )
}))

export default CardList

