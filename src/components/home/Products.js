import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';

const Products = ({products}) => (  
    <div className='product-list'>
        {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>  
)

export default Products;
