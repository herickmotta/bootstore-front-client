import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

export default function Category(props) {
    const { name } = props;
    const { products } = useContext(ProductContext);
    const filteredProducts = products.filter(p => p.categories.find(c => c.name === name));

    console.log(filteredProducts);

    if(filteredProducts.length === 0) {
        return <></>
    }

    return(
        <CategoryContainer>
            <h2>{name}</h2>
            <Products> 
                {filteredProducts.map(fp => {
                    return <Product key={fp.id} id={fp.id} name={fp.name} price={fp.price} image={fp.mainPicture} alt={fp.alt}/>
                })}
            </Products>
        </CategoryContainer>
    );
}

const CategoryContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px 20px;
    padding-bottom: 10px;
    width: 75vw;
    max-width: 620px;

    h2 {
        font-size: 27px;
        margin-bottom: 20px;
        padding-left: 10px;
    }
`;

const Products = styled.ul`
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
    padding: 10px;
`;