import { ADD_BLOG, LOAD_BLOGS, SEE_MORE } from "../ActionTypes/ActionTypes"

export const loadBlogs = (blogs) =>{
    return{
        type: LOAD_BLOGS,
        payload: blogs
    }
}
export const semoreContent = (blogs) =>{
    return{
        type: SEE_MORE,
        payload: blogs
    }
}
export const addABlog = (blogs) =>{
    return{
        type: ADD_BLOG,
        payload: blogs
    }
}