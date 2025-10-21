import type { User } from "../../data/models/User.model";
import axiosInstance from "../axios_instance";

export const userApi = {
  login: async (formData : FormData): Promise<User> => {
    const response = await axiosInstance.post("/login", formData);
    console.log(response.data)
    return response.data;
  
}}
