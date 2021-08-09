module.exports = {
  getFolders: async (req, res) => {
    const db = req.app.get("db");
    const { search } = req.query;
    const { id } = req.session.user;
    // id = userid

    if (search) {
      const searchFolders = await db.get_searched_folders(id, search);
      return res.status(200).send(searchFolders);
    } else {
      const getFolders = await db.get_folders(id);
      return res.status(200).send(getFolders);
    }
  },

  newFolder: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.session.user;
    const { category } = req.body;
    const { categoryImage } = req.body;

    const newFolder = await db.new_folder(id, category, categoryImage);
    res.status(200).send(newFolder);
  },
  deleteFolder: async (req, res) => {
    const db = req.app.get("db");
    // const {id} = req.session.user
    const { category_id } = req.params;

    const deleteFolder = await db.delete_folder(category_id);
    res.status(200).send(deleteFolder);
  },

  getFirstFolder: async (req, res) => {
    const db = req.app.get("db");
    const { category_id } = req.params;

    const getFirstFolder = await db.get_first_folder(category_id);
    res.status(200).send(getFirstFolder);
  },
};
