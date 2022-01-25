import axios from 'axios'
export const getAllUsers = async () => {
    const info = await axios
        .get('http://13.229.240.1:8080/property/building/1')
        .then(({data}) => {
            return data
        })
        return info
}