import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { tablet } from '../responsive'
import { useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${tablet({ width: "0px 20px", display: "flex", flexDirection: "column" })};
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${tablet({ marginTop: "5px" })};
`

const Option = styled.option``

const ProductList = () => {

    // const location = useLocation();
    // const category = location.pathname.split('/')[2];
    // console.log("location", location);
    // console.log("category", category);
    const [queryParams] = useSearchParams();
    // console.log("searchParam", Array.from(queryParams.keys()));
    let queryParamList = Array.from(queryParams.keys());
    let category = "";
    let searchContent = "";
    if (queryParamList.includes("category")) {
        category = queryParams.get("category");
    }
    if (queryParamList.includes("search")) {
        searchContent = queryParams.get("search");
    };

    // console.log("category, searchContent", category, searchContent)

    const [filters, setFilters] = useState({
        color: "any",
        size: "any"
    });
    const [sort, setSort] = useState("");

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        // if (value !== 'any') {
        setFilters({ ...filters, [name]: value.toLowerCase() });
        // }
    };

    const handleSortChange = (event) => {
        const { value } = event.target;
        setSort(value);
        // console.log(sort);
    };

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilterChange}>
                        <Option value="any">Any Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilterChange}>
                        <Option value="any">Any Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select name="sort" onChange={handleSortChange}>
                        <Option value="any">Any</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} searchContent={searchContent} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList