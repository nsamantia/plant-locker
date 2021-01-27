module.exports = {
  getPlants: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.session.user;
    const { plant_category_id } = req.params;

    const getPlants = await db.get_plants(id, plant_category_id);
    res.status(200).send(getPlants);
  },

  newPlant: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.session.user;
    const { plant } = req.body;
    const { plant_category_id } = req.params;
    const { plant_image } = req.body;
    const { plant_comment } = req.body;

    const newPlant = await db.new_plant(
      id,
      plant,
      plant_category_id,
      plant_image,
      plant_comment
    );
    res.status(200).send(newPlant);
  },

  deletePlant: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    const deletePlant = await db.delete_plant(id);
    res.status(200).send(deletePlant);
  },
};
