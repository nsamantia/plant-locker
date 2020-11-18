module.exports = {

    getFolders: async (req, res) => {
        const db = req.app.get('db')
        const {search} = req.query
        const {id} = req.session.user
        // id = userid


        if (search){
            const searchFolders = await db.get_searched_folders(id, search)
            return res.status(200).send(searchFolders)
        } else {
            const getFolders = await db.get_folders(id)
            return res.status(200).send(getFolders)
        }

    },

    newFolder: async (req, res) => {
        const db = req.app.get('db')
        const {userid} = req.session.user
        const {category} = req.body

        const newFolder = await db.new_folder(userid, category)
        res.status(200).send(newFolder)
    }
}