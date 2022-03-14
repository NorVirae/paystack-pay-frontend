import axios from 'axios';
import {koboDenom} from "../utils/helper"
const options = {
    method: 'GET',
    headers: { 'content-type': 'application/json', "Authorization":"Bearer "+process.env.PAYSTACK_TEST_SECRET_KEY},
    // data: {
    //     email:"norbertmbafrank@gmail.com",
    //     amount:500,
    //     currency:"NGN",
    //     callback_url:"https://www.fischela.com",

    // },

    url:process.env.REACT_APP_API_URL+"/api"+"/get/all/transactions"
  };
  
export const getAllTransactions = async () => {
    console.log(process.env.REACT_APP_API_URL)
    options.method = "GET";
    options.url = process.env.REACT_APP_API_URL+"/api"+"/get/all/transactions";
    return await axios(options);
}

export const innitiateTransaction = async () => {
    console.log(process.env.REACT_APP_API_URL+"/api"+"/initiate/transaction")
    options.method = "POST";
    options.url = process.env.REACT_APP_API_URL+"/api"+"/initiate/transaction"
    options.data = {
        email:"norbertmbafrank@gmail.com",
        amount:100 * koboDenom,
        currency:"NGN",
        callback_url:"http://localhost:3000/payment/status"
    }
    return await axios(options);
}

export const verifyTransaction = async (trId) => {
    console.log(process.env.REACT_APP_API_URL+"/api"+"/verify/transaction")
    options.method = "POST";
    options.url = process.env.REACT_APP_API_URL+"/api"+"/verify/transaction"
    options.data = {
        trId
    }
    return await axios(options);
}
