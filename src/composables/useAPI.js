import { ref } from 'vue';
import axios from 'axios';
let phrase = ref();


const api = axios.create({
    baseURL: "https://api.aakhilv.me",
});

export const useAPI = () => {
    const getQuote = async () => {
        const res = await api.get(`/fun/facts?num=1`);
          phrase.value = res.data[0];
      };
      return { phrase, getQuote };
};