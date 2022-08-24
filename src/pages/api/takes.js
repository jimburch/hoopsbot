import knex from "../../data/db.js";

const handler = async (req, res) => {
  try {
    if (req.method === "GET") {
      const count = await knex("takes")
        .count()
        .then((response) => {
          return response[0].count;
        })
        .catch((error) => {
          throw new Error(error);
        });

      const request = await knex("takes")
        .select()
        .offset(Math.floor(Math.random() * count))
        .limit(1)
        .then((response) => {
          return response[0];
        })
        .catch((error) => {
          throw new Error(error);
        });

      return res.status(200).send(request);
    }

    if (req.method === "POST") {
      const { take, hot, cold, shares } = req.body;
      const post = await knex("takes")
        .insert({
          take: take.replace(/\r?\n|\r/g, ""),
          hot,
          cold,
          shares,
        })
        .catch((error) => {
          throw new Error(error);
        });

      return res.status(201).json("Take posted!");
    }

    if (req.method === "PUT") {
      const { id, take, hot, cold, shares, updated_at } = req.body;
      const put = await knex("takes")
        .update({
          take: take.replace(/\r?\n|\r/g, ""),
          hot,
          cold,
          shares,
          updated_at,
        })
        .where({ id })
        .catch((error) => {
          throw new Error(error);
        });

      return res.status(200).json("Take updated!");
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};

export default handler;
