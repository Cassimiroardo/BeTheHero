import api from './api'

const index = async (id) => {
    return await api.get('incidents',{
                headers: {
                    Authorization: id
                }
                    })
                    .then( res => {
                        return res.data
                    })
                    .catch( err => {
                        console.log(err)
                        alert('Erro ao carregar perfil')
                    })
}

const destroy = async (incidentId, ongId) => {
    return await api.delete(`incidents/${incidentId}`, {
        headers: {
            Authorization: ongId
        }
    }).then(res => {
        return res
    }).catch(err => {
        console.log(err)
        alert('Erro ao deletar caso')
    })
}

const create = async (id, data) => {
    return await api.post('incidents', data, {
        headers: {
            Authorization: id
        }
    }).then(res => {
            return res
    }).catch(err => {
        console.log(err)
        alert('Erro ao criar Caso')
    })
}

export {
    index,
    destroy,
    create
}