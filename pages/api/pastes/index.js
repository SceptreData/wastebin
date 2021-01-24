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
        console.log("This happened");
        console.log(req.body);
        const paste = new Paste({ body: req.body, language: "javascript" });
        paste.save((err) => console.log(err));
        // const paste = await Paste.create({
        //   body: req.body,
        //   language: "javascript",
        // }); /* create a new model in the database */
        console.log(paste);
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
