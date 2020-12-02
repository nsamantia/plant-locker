module.exports = {

    getFolders: async (req, res) => {
        const db = req.app.get('db')
        const {search} = req.query
        const {id} = req.session.user
        const {category_one_id} = req.params
        

        if (search){
            const searchFolders = await db.second_get_searched_folders(id, search, category_one_id)
            return res.status(200).send(searchFolders)
        } else {
            const getFolders = await db.second_get_folders(id, category_one_id)
            return res.status(200).send(getFolders)
        }

    },

    newFolder: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {category} = req.body
        const {category_one_id} = req.params

        const newFolder = await db.second_new_folder(id, category, category_one_id)
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