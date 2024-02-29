//"https://portiaportia.github.io/json/shoes.json"

const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const respone = await fetch(url);
        return respone.json();
    }  
    catch(error) {
        console.log(error);
    }
};

const showShoes = async() => {

};