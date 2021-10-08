const axios =require("axios");
const APIKEY = process.env.APIKEY;

class News{
  getAll(){
    return axios.get('https://newsapi.org/v2/top-headlines?country=mx&apiKey='+APIKEY)
  }
  getOne(q){
    return axios.get(`https://newsapi.org/v2/everything?q=${q}&apiKey=${APIKEY}`);
  }
}

module.exports = News