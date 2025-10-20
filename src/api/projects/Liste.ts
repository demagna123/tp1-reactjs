import type { Project } from "../../data/models/project/model";
import axiosInstance from "../axios_instance";

export const projectApi = {
    getAll: async (): Promise<Project [] > => {
const response = await axiosInstance.get('/projects');
return response.data;
},
    create: async (formData: FormData): Promise<Project [] > => {
const response = await axiosInstance.post('/projects', formData);
return response.data;
},
}