import api from './api'

const index = async (page) => {
    return await api.get(`all-incidents?page=${page}`)
                    .then( res => {
                        return res
                    })
                    .catch( err => {
                        console.log(err)
                        alert('Erro ao carregar Casos')
                    })
}

export {
    index
}