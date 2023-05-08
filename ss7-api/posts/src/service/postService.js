import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get("https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts");
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const create = async (blog) => {
    try {
        await axios.post("https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts", {...blog});
        alert("Create Success");
    } catch (error) {
        console.log(error);
    }
}