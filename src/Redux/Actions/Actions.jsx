import { LOAD_BLOGS } from "../ActionTypes/ActionTypes"

export const loadBlogs = (blogs) =>{
    return{
        type: LOAD_BLOGS,
        payload: blogs
    }
}