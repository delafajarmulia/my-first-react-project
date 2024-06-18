import { useFormik } from 'formik'
import { useFetchCategories } from '../features/category/useFetchCategory'
import { useMutation } from '@tanstack/react-query'
import { axiosInstance } from '../lib/axios'
import React from 'react'
import { useCreateCategory } from '../features/category/useCreateCategory'

const Category = () => {
    const { data: categories, isLoading: isLoadingCategory, refetch: refetchCategories } = useFetchCategories()

    const formik = useFormik({
        initialValues: {
            name: '',
            price: 0,
        },
        onSubmit: () => {
            // post category
            const { name } = formik.values
            
            mutate({
                name
            })

            // alert('category was added')

            formik.setFieldValue("name", "")
            formik.setFieldValue("price", 0)
        }
    })

    const { mutate, isLoading: createCategoryIsLLoading } = useCreateCategory({
        // kalo success bakal ngapain aja
        onSuccess: () => {
            refetchCategories() // ini belum work :(
        },
        onError: () => {
            // console.log(categoryResponse.data)
            console.log('error')
        }
    })

    const handleFormInput = (event) => {
        formik.setFieldValue(event.target.name, event.target.value)
    }

    const renderCategories = () => {
        return categories?.data.payload.datas.map((category) => {
            return (
                <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                </tr>
            )
        })
    }

    return (
        <>
            <div>Category</div>

            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    {renderCategories()}
                    {/* {isLoading ? 'loading data..' : null} */}
                    {/* sort circuit - kalo isLoading true, maka user dikasih tau  */}
                    {isLoadingCategory && 'loading category data..'} 
                </tbody>
            </table>

            <p>{formik.values.name}</p>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="">category name</label>
                <input 
                    type="text" 
                    name='name' 
                    value={formik.values.name} /* biar nanti bisa ke reset valuenya */
                    onChange={handleFormInput} 
                /> {/* namenya ngikut kayak di formiknya */}
                <label htmlFor="">input angka terserah</label>
                <input 
                    type="number" 
                    name='price' 
                    value={formik.values.price} 
                    onChange={handleFormInput} 
                />
                {
                    createCategoryIsLLoading ? 
                        <button type='submit' disabled>submit</button> 
                        : 
                        <button type='submit'>submit</button>
                }
                
            </form>
        </>
    )
}

export default Category