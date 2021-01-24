import dbConnect from "../../../utils/dbConnect";
import Paste from "../../../models/Paste";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const pets = await Pet.find({}); /* find all the data in our database */
        res.status(200).json({ success: true, data: pets });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const paste = new Paste({
          body: req.body,
          language: "javascript",
        });

        paste.save((err) => console.log(err));
        res.status(201).json({ success: true, data: paste });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
