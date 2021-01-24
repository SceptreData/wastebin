import Link from "next/link";
import {useRef} from 'react'
import dbConnect from "../utils/dbConnect";


import { ActionBar } from "../components/ActionBar";
import { WasteEditor } from "../components/WasteEditor";


const Index = () => {
  const editorRef = useRef(null)

  return  (
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
          <ActionBar editor={editorRef}/>
        </div>

        <WasteEditor  editorRef={editorRef}/>
      </div>
    );
;
};


export default Index;
