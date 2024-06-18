import { useCategories } from '../features/category/useCategory'
// import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../lib/axios'
import { useEffect, useState } from 'react'

const Category = () => {
    // const { data: categories, isLoading: isLoadingCategory } = useCategories()

    const [categories, setCategories] = useState([])
    const [isLoadingCategory, setIsLoadingCategory] = useState(false)

    const fetchCategories = async() => {
        try {
            setIsLoadingCategory(true)
            setTimeout(async() => { // biar kek ada ngelegnnya
                const categoriesResponse = await axiosInstance.get('/categories')
        
                setCategories(categoriesResponse.data.payload.datas)
                setIsLoadingCategory(false)
            }, 1500)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    // const categoriesQuery = useQuery({
    //     queryFn: async() => {
    //         const categoriesResponse = await axiosInstance.get('/categories')
    //         return categoriesResponse
    //     },
    // })

    console.log(categoriesQuery.data)

    const renderCategories = () => {
        return categories.map((category) => {
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
        </>
    )
}

export default Category