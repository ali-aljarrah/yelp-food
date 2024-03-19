import axios  from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer YnOt4ZQLvj9NdGkFPs2JGfyzsikEBKq1l3qpXCOV6QSXIBFuWHcYQ2QjK0xMX3tOTuSYNO-eR12vwSD2WM_o_mAa55CPMj-fRngnf864B9aXgab0FA8JL8kzWYUrYXYx'
    }
});

