import React from 'react';
import styled from 'styled-components';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { useState } from 'react';
import { tablet } from '../responsive'

const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 8px;
`

const Wapper = styled.div`
    width: 600px;
    border:rgb(112, 112, 109)  solid;
    border-radius: 10px;
    backgroud-color: yellow;
    padding: 8px;
    border-width: thin;
    ${tablet({ width: "90vw" })};
`;

const ProductionInfo = styled.div`
    display:flex;
    flex-direction: column;
`;

const Body = styled.div`
    display:flex;
    ${tablet({ flexDirection: "column" })};
`;

const Left = styled.div`
    flex:1;
    ${tablet({ maxWidth: "300px", })}
    // display:
`;

const Right = styled.div`
    flex:4;
    display:flex;
    flex-direction: column;
    // justify-content: space-between;
    padding-left: 8px;
`;

const ProductImage = styled.img`
    max-width: 100%;
`;

const OrderStatus = styled.div``;

const ProductSpec = styled.div`
    display: flex;
    flex-direction:column;
    margin-bottom: 5px;
`;

const ProductPay = styled.div`
    display: flex;
    flex-direction:column;
    margin-bottom: 5px;
`;

const ProductTotal = styled.div``;

const ProductDetail = styled.div`
    margin-right:20px;
    margin-bottom: 5px;
`;

const OrderInfo = styled.div`
    margin-top: 10px;
    display: ${props => props.fold}
`;
const TextInfo = styled.div``;

const Address = styled.div`
    margin-top: 8px;
`;

const AddressInfoTitle = styled.div``

const AddressInfo = styled.div``;

const ExpandBtn = styled.div`
    width:100%;
    color: gray;
    display:flex;
    justify-content:center;
    cursor: pointer;
    display: ${props => { if (props.fold === "block") return "none" }};
`

const CollapseBtn = styled.div`
    width:100%;
    color: gray;
    display:flex;
    justify-content:center;
    cursor: pointer;
`

const PurchasedItem = (props) => {
    const [fold, setFold] = useState("none");
    const item = props.item;

    return (
        <Container>
            <Wapper>
                <ProductionInfo>
                    <Body>
                        <Left>
                            <ProductImage src={item.img} alt="Product Image" />
                        </Left>
                        <Right>
                            <ProductDetail>ProductId: {item._id}</ProductDetail>
                            <ProductSpec>
                                <ProductDetail>Color: {item.color}</ProductDetail>
                                <ProductDetail>Size: {item.size}</ProductDetail>
                            </ProductSpec>
                            <ProductPay>
                                <ProductDetail>Amount: {item.quantity}</ProductDetail>
                                <ProductTotal>Total: ${item.quantity * item.price}</ProductTotal>
                            </ProductPay>
                        </Right>
                    </Body>
                    <ExpandBtn onClick={() => setFold("block")} fold={fold}>
                        <ExpandMoreOutlinedIcon />
                    </ExpandBtn>
                </ProductionInfo>

                <OrderInfo fold={fold}>
                    <OrderStatus>Status: {item.status}</OrderStatus>
                    <TextInfo>Order Id: {item._id}</TextInfo>
                    <TextInfo>Created At: {item.createdAt}</TextInfo>
                    <Address>
                        <AddressInfoTitle>ADDRESS</AddressInfoTitle>
                        <AddressInfo>Details: {item.address.line1}</AddressInfo>
                        <AddressInfo>         {item.address.line2}</AddressInfo>
                        <AddressInfo>City: {item.address.city}</AddressInfo>
                        <AddressInfo>State: {item.address.state}</AddressInfo>
                        <AddressInfo>Country: {item.address.country}</AddressInfo>
                        <AddressInfo>Postcode: {item.address.postal_code}</AddressInfo>
                    </Address>
                    <CollapseBtn onClick={() => setFold("none")}>
                        <ExpandLessOutlinedIcon />
                    </CollapseBtn>
                </OrderInfo>
            </Wapper>
        </Container>
    )
}

export default PurchasedItem;