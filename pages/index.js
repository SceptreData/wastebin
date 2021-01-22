import Link from "next/link";
import dbConnect from "../utils/dbConnect";

import Editor, {useMonaco} from "@monaco-editor/react"

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
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>wastebin</h1>
        <button>Save</button>
        <button>New</button>
      </div>
    </div>

    <Editor
      height="100vh"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue="// welcome to wastebin"
      onChange={() => true}
      options={{
        minimap: {
          enabled: false
        }
      }}
    />
  </div>
);

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();
  console.log("get wasted");
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
