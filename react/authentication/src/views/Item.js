import React, {useState, useEffect} from 'react'
import withProtection from '../utils/withProtection'
import axios from "axios";
import { Card, Button } from 'react-bootstrap';
const URI = "https://ecomerce-master.herokuapp.com/api/v1/item";

const Item = () => {
    const [producto, setProducto] = useState([]);

    useEffect (() => {
        axios
        .get(URI)
        .then((response) => {
            console.log(response.status); 
            console.log(response.data); 

            if (response.status === 200) {
                setProducto (response.data);
            } 
        })
        .catch((error) => {
            console.log(error);
        });
    },[])


    return (
        <div>

        </div>
    )
}

export default withProtection(Item);