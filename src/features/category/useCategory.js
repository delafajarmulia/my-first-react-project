import React, {useEffect, useState} from "react"
import { axiosInstance } from "../../lib/axios"

// react hook bukan component
export const useCategories = () => {
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

    return {
        data: categories,
        isLoading: isLoadingCategory
    }
}