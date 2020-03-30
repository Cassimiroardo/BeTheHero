const connection = require('../database/connection')

module.exports = {
    async store(req, res) {
        const { 
            title,
            description,
            value
        } = req.body

        const ong_id = req.headers.authorization

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        return res.json({ id })
    },
    
    async index(req, res) {
        const ong_id = req.headers.authorization

        return res.json(
            await connection('incidents').select('*').where({
            ong_id
            })
        )
    },

    async indexMany(req, res) {
        const { page = 1 } = req.query
 
        const [count] = await connection('incidents')
                                .count()
 
        res.header('X-Total-Count', count['count(*)'])

        const result = await connection('incidents')
                                .limit(5)
                                .offset((page - 1) * 5)
                                .select('incidents.id','incidents.title','incidents.value','incidents.description','incidents.ong_id','ongs.name','ongs.email','ongs.whatsapp','ongs.city','ongs.uf')
                                .innerJoin('ongs', 
                                           'incidents.ong_id',
                                           'ongs.id'
                                           )

        return res.json(result)
    },

    async delete(req, res) {
        const { id } = req.params
        const ong_id = req.headers.authorization

        const incident = await connection('incidents')
                                .where({ ong_id })
                                .select('ong_id')
                                .first()

        if(!incident || incident.ong_id !== ong_id) {
            return res.status(401).json({ msg: 'Unauthorized' })
        }

        await connection('incidents').where( 'id',id ).delete()
        return res.status(204).send()
    }
}