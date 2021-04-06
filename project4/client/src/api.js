import axios from 'axios';
const url = "/api/post";

export default class API {
    // get all the posts from the server

    static async getAllPost(){
        const res = await axios.get(url);
        return res.data;
    }
    // get single post by id
    static async getPostByID(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    // to insert post into database
    static async addPost(post) {
        const res = await axios.post(url, post);
        return res.data;
    }

    // to update in database
    static async updatePost(id,post) {
        const res = await axios.patch(`${url}/${id}`,post);
        return res.data;
    }
    // get dalete the post
    static async deletePost(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}