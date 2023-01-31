import React from 'react';
import './EmptyView.css'

const EmptyView = () => {
    return (
        <div className='emptyView-wrap'>
            <img src="https://stores.maxfashion.in/VendorpageTheme/Enterprise/EThemeForMax/images/product-not-found.jpg" alt="emptyView" />
        </div>
    );
}

export default EmptyView;