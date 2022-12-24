import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = process.env.REACT_API_PRODUCT || "http://localhost:5000/api"


// get all product
export const getProducts = createAsyncThunk('getProdcuts', async () => {
    try {
        const response = await axios.get(URL)
        const products = await response.data
        return products
    }
    catch (error) {
        return { message: "Get products error" }
    }
})

// create product
export const createProduct = createAsyncThunk('createProduct', async(newProduct) => {
    try {
        const response = await axios.post(URL , newProduct)
        const data = await response.data
        return data
    } catch (error) {
        return { message: "create product error" } 
    }
})
// update product
export const updateProduct = createAsyncThunk('updateProduct', async({id , data}) => {
    try {
        const response = await axios.put(`${URL}/put/${id}` , data)
        const old_product = await response.data
        return old_product
    } catch (error) {
        return { message: "update product error" } 
    }
})
// delete product
export const deleteProduct = createAsyncThunk('deleteProduct' , async (id) => {
    try {
        const response = await axios.delete(`${URL}/delete/${id}`)
        const delete_product = await response.data 
        return delete_product
    } catch (error) {
        return { message: "update product error" } 
    }
})
// get product by id
export const getProductById = createAsyncThunk('getProductById' , async (id) => {
    try {
        const response = await axios.get(`${URL}/${id}`)
        const data = await response.data
     
        return data
    } catch (error) { 
        return { message: "get product by id error" } 
    }
})


const initialState = {
    products: [],
    productById: true,
    loading: false,
    message: {}, 
    getProdById:{}
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{

    },
    extraReducers:{
        // get all product
        [getProducts.fulfilled]: (state , {payload}) => {
            state.products = payload
            state.productById = false
            state.message = {}
        },
        // create product
        [createProduct.fulfilled]: (state , action) => {
            state.message = {message:"create product"}
            state.productById = true
        }, 
        // update product 
        [updateProduct.fulfilled]: (state ,action) => {
            state.productById = true;
        },
        // delete product
        [deleteProduct.fulfilled]: (state , action) => {
            state.productById = true
            state.message = {message:"Deleted product"}
        },
        // get product by id
        [getProductById.fulfilled]: (state ,action) => {
            state.productById = true
            state.getProdById = action.payload
        }, 
    }
});

export const {}  = productSlice.actions

export const ProductSlice = productSlice.reducer