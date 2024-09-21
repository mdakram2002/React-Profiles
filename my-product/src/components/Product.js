import React from 'react';
import ProductItems from './ProductItems';
import Card from './Card';
import './Product.css';

const Product = (props) => {

    return (
        <Card className="product">
            <ProductItems>
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.itmes[0].date}
            </ProductItems>
            <ProductItems>
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.itmes[1].date}
            </ProductItems>
            <ProductItems>
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.itmes[2].date}
            </ProductItems>
            <ProductItems>
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.itmes[3].date}
            </ProductItems>
            <ProductItems>
                title={props.items[4].title}
                amount={props.items[4].amount}
                date={props.itmes[4].date}
            </ProductItems>
        </Card>
    );
};
export default Product;