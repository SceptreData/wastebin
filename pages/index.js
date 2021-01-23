import Link from "next/link";
import dbConnect from "../utils/dbConnect";

import Paste from "../models/Paste";

import { ActionBar } from "../components/ActionBar";
import { WasteEditor } from "../components/WasteEditor";


const Index = () => (
  <div className="App">
    <div
      style={{
        position: "absolute",
        top: "1rem",
        right: "1rem",
        height: "60px",
        width: "300px",
        border: "1px solid white",
        zIndex: "9999",
        color: "white",
        padding: ".5rem .5rem",
      }}
    >
      <ActionBar />
    </div>

    <WasteEditor />
  </div>
);

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();
  console.log("get wasted");
  
  const doc = new Paste();
  console.log(doc);

  return { props: { message: "Howdy" } };

  /* find all the data in our database */
  // const result = await Pet.find({})
  // const pets = result.map((doc) => {
  //   const pet = doc.toObject()
  //   pet._id = pet._id.toString()
  //   return pet
  // })

  // return { props: { pets: pets } }
}

export default Index;
