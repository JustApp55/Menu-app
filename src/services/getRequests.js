import axios from 'axios'

export const getProducts = () => {
    const URL = 'http://localhost:3001/products'
    const response = axios.get(URL)
    return response
}

export const getProduct = (id) => {
    const URL = `http://localhost:3001/products/${id}`
    const response = axios.get(URL)
    return response
}

export const deleteProduct = (id) => {
    const URL = `http://localhost:3001/products/${id}`
    const response = axios.delete(URL)
    return response
}

export const createProduct = (add) => {
    const URL = 'http://localhost:3001/products'
    const response = axios.post(URL, add)
    return response
}

export const editProduct = (id, updatedTheProduct) => {
    const URL = `http://localhost:3001/products/${id}`
    const response = axios.put(URL, updatedTheProduct)
    return response
}
