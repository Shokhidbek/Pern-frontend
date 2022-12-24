import React, { useEffect } from 'react'
import { getProducts, updateProduct, deleteProduct } from '../features/ProductSlice'
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal';
const ProductList = () => {
    const dispatch = useDispatch()

    const { productById, products , message } = useSelector(state => state.product)
    useEffect(() => {
        if (productById) {
            dispatch(getProducts())
        }
      
    }, [productById])

  


    return (
        <div style={{ padding: "3vh 10%" }}>
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Count</th>
                        <th scope="col">Chegirma</th>
                        <th scope="col">Summa</th>
                        <th scope="col">Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map((product, index) => {
                            return (
                                <tr key={product.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.count}</td>
                                    <td>{product.chegirma}</td>
                                    <td>{product.sum}</td>
                                    <td>
                                       <Modal id={product.id}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList