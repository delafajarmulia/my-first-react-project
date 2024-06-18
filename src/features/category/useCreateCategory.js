import { useMutation } from "@tanstack/react-query"
import { axiosInstance } from "../../lib/axios"

export const useCreateCategory = ({ onSuccess, onError }) => {
    return useMutation({
        mutationFn: async(body) => {
            const categoryResponse = await axiosInstance.post('/categories', body)

            return categoryResponse
        },
        onSuccess,
        onError
    })
}