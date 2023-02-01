import React, {useState, useEffect} from 'react';
import Header from '../../components/common/Header';
import Products from '../../components/home/Products';
import FilterPanel from '../../components/home/FilterPanel';
import SearchBar from '../../components/common/SearchBar';
// import {colorList, genderList, priceRangeList, typeList} from '../../constants/constants';
import './styles.css';
import EmptyView from '../../components/common/EmptyView';
import axios from 'axios';
import {useWindowWidth} from "../../utils/CustomHooks"
import { applyFilters } from '../../utils/helper';

const CATALOG_API = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";


const Home = () => {

    const defaultFilter = {
        color: new Set(),
        gender: new Set(),
        price: new Set(),
        type: new Set()
    }

    //states
    const screenWidth = useWindowWidth();
    const [fixedData, setFixedData] = useState([]);
    const [filters, setFilters] = useState(defaultFilter);
    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetchProducts(CATALOG_API);
    }, []);


    const fetchProducts = async (url) => {
        try {
            const res = await axios.get(url);
            const data = res.data;

            setProducts(data);
            setFilteredProducts(data);
            setFixedData(data);

        } catch (e) {
            alert(e);
        }
    }

    //search functionality 
    useEffect(() => {
        if(searchQuery === "") {
            setFilteredProducts(products);
        } else {
            const value = searchQuery;

            let filtered = products.filter(product => {
                const {name, color, type} = product;
                return name.toLowerCase().includes(value) || color.toLowerCase().includes(value) || type.toLowerCase().includes(value);

            })

            setFilteredProducts(filtered);
        }

    }, [searchQuery, products]);

    //application of filter
    useEffect(() => {
        let currProducts = [...fixedData];

        if(currProducts.length) {
            let filtered = applyFilters(currProducts, filters);

            setProducts(filtered);
        }
    }, [filters, fixedData]);



    const clearFilters = () => {
        setFilters(defaultFilter);
        setProducts(fixedData);
    }

    //check if filters are not applied
    const areFiltersEmpty = () => {
        const { color, gender, price, type } = filters;

        return !color.size && !gender.size && !price.size && !type.size;
    }

    return (
        <div className='home'>  
            <Header />

            <div className='search-bar-area'>
                {!areFiltersEmpty() ? <button className='clear-filters-btn' onClick={clearFilters}>Clear Filters</button>:null}
                <SearchBar setSearchQuery={setSearchQuery} displayFilters={setShowFilters} areFiltersEmpty={areFiltersEmpty}/>    
            </div>

            <div className="products-n-filters">
                {(screenWidth < 600 ? showFilters : true) ? <FilterPanel showFilters={showFilters} filters={filters} setShowFilters={setShowFilters} setFilters={setFilters} clearFilters={clearFilters} areFiltersEmpty={areFiltersEmpty} /> : null}
                { filteredProducts.length ? <Products products = {filteredProducts}/> : <EmptyView />}
            </div>

        </div>
    );
}

export default Home;

