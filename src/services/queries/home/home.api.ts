import apiClient from "@/services/apiClient"
import { CategoryType } from "./home.type"
import { DataResponse } from "@/utils/utils"


export const getCategories = async ():Promise<DataResponse<CategoryType[]>> => {
    const response = await apiClient.get("/category")
    return response.data
}