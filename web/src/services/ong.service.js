import api from './api'

const register = async (data) => {
   return await api.post('ongs', data)
                   .then( res => {
                       return res.data.id
                   })
                   .catch( err => {
                       console.log(err)
                       alert('Erro no cadastro, tente novamente')
                   })
}

const login = async (id) => {
    return await api.post('auth',{ id })
                    .then( res => {
                        return res.data.name
                    })
                    .catch( err => {
                        console.log(err)
                        alert('Erro no login, tente novamente')
                    })
}

export {
    register,
    login,
}