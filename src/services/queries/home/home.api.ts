import apiClient from "@/services/apiClient"
import { CategoryType, PlaceType } from "./home.type"
import { DataResponse } from "@/utils/utils"


export const getCategories = async ():Promise<DataResponse<CategoryType[]>> => {
    const response = await apiClient.get(`/category`)
    return response.data
}


export const getPlaces = async(skip: number, limit: number): Promise<DataResponse<PlaceType[]>> => {
    const response = await apiClient.get(`/place/pagination?limit=${limit}&skip=${skip}`)
    return response.data
}