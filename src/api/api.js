const URL_BASE = "https://fakestoreapi.com/products"


const getData = async (id) => {
    const apiURL = id ? `${URL_BASE}/${id}` : URL_BASE;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        alert("Fetch Error", error);
    }
}





export default getData;