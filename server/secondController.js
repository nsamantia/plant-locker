module.exports = {

    getFolders: async (req, res) => {
        const db = req.app.get('db')
        const {search} = req.query
        const {id} = req.session.user
        // id = userid


        if (search){
            const searchFolders = await db.second_get_searched_folders(id, search)
            return res.status(200).send(searchFolders)
        } else {
            const getFolders = await db.second_get_folders(id)
            return res.status(200).send(getFolders)
        }

    },

    newFolder: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {category} = req.body

        const newFolder = await db.second_new_folder(id, category)
        res.status(200).send(newFolder)
    },
    deleteFolder: async(req, res) => {
        const db = req.app.get('db')
        // const {id} = req.session.user
        const {category_id} = req.params

        const deleteFolder = await db.second_delete_folder(category_id)
        res.status(200).send(deleteFolder)
    }
}