import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://apiforlearning.zendvn.com/api'


export const api = {
    call : () => {
        return axios.create({
            baseURL
        })
    }
}







