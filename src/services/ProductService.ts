import React from 'react'
import NetworkService from './NetworkService';
import CardStore from "../stores/CardStore";

const ProductService =  async () => {
    const data = await NetworkService();
    CardStore.getProducts(data.data.products)  
}

export default ProductService