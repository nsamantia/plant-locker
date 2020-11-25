module.exports = {

    getPlants: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {plant_category_id } = req.body

        const getPlants = await db.get_plants(id, plant_category_id)
        res.status(200).send(getPlants)
       
    },

    newPlant: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {plant, plant_category_id} = req.body

        const newPlant = await db.new_plant(id, plant, plant_category_id)
        res.status(200).send(newPlant)
    },

    deletePlant: async (req, res) => {

    }
}