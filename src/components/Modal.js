import React, { useState, useEffect } from 'react'
import { deleteProduct, getProductById, updateProduct } from '../features/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

const Modal = ({ id }) => {
    const { getProdById, productById } = useSelector(state => state.product)

    const dispatch = useDispatch()
    const [type, setType] = useState('')
    const [values, setValues] = useState({
        name: "",
        price: "",
        count: "",
        chegirma: "",
        sum: ""
    });
    const handleChange = (e) => {
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const getProById = async (id) => {
        await setType('EDIT')
        await dispatch(getProductById(id))
    }
    const deleteFun = (id) => {
        if (id) {
            dispatch(deleteProduct(id))
        }
    }




    useEffect(() => {
        if (getProdById) {
            setValues({
                name: getProdById.name,
                price: getProdById.price,
                count: getProdById.count,
                sum: getProdById.sum,
                chegirma: getProdById.chegirma
            })
        }

    }, [productById])

    const updateFun = (id, data) => {
        dispatch(updateProduct({ id: id, data: data }))
        console.log(values);
    }
    const handleSubmit = (e, id) => {
        e.preventDefault()
        console.log(type);
        if (type === "EDIT") {
            updateFun(id, values)
        }
        else if (type == "DELETE") {
            deleteFun(id)
        }
    }
    return (
        <>
            <button onClick={() => getProById(id)} className='btn btn-outline-primary m-2' data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit
            </button>
            <button onClick={() => setType("DELETE")} className='btn btn-outline-danger' data-bs-toggle="modal" data-bs-target="#exampleModal">
                Delete
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <form onSubmit={(e) => handleSubmit(e, id)} className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">
                                {
                                    type === "EDIT" ?(<>Update product</>):(<>Delete product</>)
                                }
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            {
                                type === 'EDIT' ? (
                                    <>
                                        <input
                                            type="text"
                                            className='form-control'
                                            value={values.name}
                                            onChange={handleChange}
                                            name="name"
                                            placeholder='Name' />
                                        <input
                                            type="number"
                                            className='form-control mt-3'
                                            value={values.price}
                                            onChange={handleChange}
                                            name="price"
                                            placeholder='Price' />
                                        <input
                                            type="number"
                                            className='form-control mt-3'
                                            value={values.count}
                                            onChange={handleChange}
                                            name="count"
                                            placeholder='Count' />
                                        <input
                                            type="number"
                                            className='form-control mt-3'
                                            value={values.chegirma}
                                            onChange={handleChange}
                                            name="chegirma"
                                            placeholder='Chegirma' />
                                        <input
                                            type="number"
                                            className='form-control mt-3'
                                            value={values.sum}
                                            onChange={handleChange}
                                            name="sum"
                                            placeholder='Sum' />
                                    </>
                                ) :
                                    (<>
                                      <center>
                                        <h1>Siz rostan ham shu product ni o'chrimoqchimsiz</h1>
                                      </center>
                                    </>)
                            }
                        </div>
                        <div className="modal-footer">
                            {
                                type === "EDIT" ? (
                                    <button data-bs-dismiss="modal" aria-label="Close" type="submit" className="btn btn-primary">
                                        Save
                                    </button>
                                ) : (<></>)
                            }
                            {
                                type === "DELETE" ? (
                                    <button data-bs-dismiss="modal" aria-label="Close" type="submit" className="btn btn-primary">
                                        Delete
                                    </button>
                                ) : (<></>)
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Modal