import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, Divider, IconButton } from '@mui/material';
import {Product} from '../../models/Product'
import { inject, observer } from 'mobx-react';
import styles from './Card.module.scss'


const ImgMediaCard = inject('AppStore')(observer((props:any) => {
  
    const { products} = props.AppStore;
    console.log(products);
    
    return (
        <>
       {products.map((product:Product)=>(
        <Card key={product.id} className={styles.Card} sx={{ maxWidth: 260, boxShadow: 3  }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image={product.image}
            />
            <CardContent>
                <Typography className={styles.CardGraphy} gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography className={styles.CardGraphy} variant="body2" >
                    {product.description}
                </Typography>
            </CardContent>
            <Divider light />
            <CardActions>
                <Button variant="contained" size="small"  color="success" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </Button>
                <Button variant="outlined" size="small" color="error" aria-label="add an alarm">
                    <ReadMoreRoundedIcon />
                </Button>
            </CardActions>
        </Card>
       ))}
        
         </>
    );
}))
export default ImgMediaCard