import React, { useEffect, useState } from 'react'
import { createProduct } from '../features/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'


const CreateProduct = () => {
  const [values, setValues] = useState({
    name: "",
    price: "",
    count: "",
    chegirma: "",
    sum: ""
  })
  const dispatch = useDispatch();
  const { message } = useSelector(state => state.product)
  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (values.name && values.price && values.count && values.chegirma && values.sum) {
      dispatch(createProduct(values))
      setValues({
        name: "",
        price: "",
        count: "",
        chegirma: "",
        sum: ""
      })
  }
}
useEffect(() => {
 
}, [message])
return (
  <div className='conatiner'>
    <div className="row">
      <div className="col-4 offset-4 mt-3">
        <form onSubmit={handleSubmit} className="card text-left">
          <div className="card-header">
            <h2 className="card-title text-center">Create product</h2>
          </div>
          <div className="card-body">
            <input
              type="text"
              value={values.name}
              onChange={handleChange}
              name={'name'}
              placeholder={'Name'}
              className={'form-control'}
            />
            <input
              type="number"
              value={values.price}
              onChange={handleChange}
              name={'price'}
              placeholder={'Price'}
              className={'form-control mt-4'}
            />
            <input
              type="number"
              value={values.count}
              onChange={handleChange}
              name={'count'}
              placeholder={'Count'}
              className={'form-control mt-4'}
            />
            <input
              type="number"
              value={values.chegirma}
              onChange={handleChange}
              name={'chegirma'}
              placeholder={'Chegirma'}
              className={'form-control mt-4'}
            />
            <input
              type="number"
              value={values.sum}
              onChange={handleChange}
              name={'sum'}
              placeholder={'Sum'}
              className={'form-control mt-4'}
            />
            <button type='sumbit' className='btn btn-outline-success float-end mt-3 w-25 py-3' style={{ fontSize: "22px" }}>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)
}

export default CreateProduct