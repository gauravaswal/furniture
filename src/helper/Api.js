import Axios from "./axios"

export const axiosRequest = async (url, body, method) => {
    const result = await Axios[method](url, body)
    return result

}