import React from 'react'
import { Button, Typography } from '@mui/material'
import styles from './Product.module.scss'
import { Delete, Edit } from '@mui/icons-material'
import { useParams } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Product } from '../../models/Product'
import { Store } from '../../dictionary'

const ProductCard = inject(Store.CardSrore)(observer((props: any) => {
    const { products } = props.CardStore;    
    const params = useParams();
    const product = products.find((item: Product) => item.id === params.id);
    const {name, description} = product
    
    return (
        <div className={styles.productCard}>
            <div className={styles.cardGraphy}>
                <Typography className={styles.graphyfonth2} variant="h2" gutterBottom component="div">
                    {name} 
                </Typography>

                <Typography sx={{ pb: 5 }} className={styles.graphyfontp} >
                    {description}
                </Typography>
                <div>

                    <Button variant="contained" size="large" color="error" startIcon={<Delete />}>
                        Delete
                    </Button>
                    <Button sx={{ mx: 2 }} variant="contained" size="large" color="secondary" endIcon={<Edit />}>
                        Edit
                    </Button>

                </div>
            </div>

        </div>
    )
}))

export default ProductCard