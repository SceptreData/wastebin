import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/router";

import dbConnect from "../../utils/dbConnect";
import { replaceDates } from "../../utils/api";

import { ActionBar } from "../../components/ActionBar";
import { WasteEditor } from "../../components/WasteEditor";
import Paste from "../../models/Paste";

/* Allows you to view pet card info and delete pet card*/
const PastePage = ({ paste }) => {
  const editorRef = useRef(null);

  return (
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
        <ActionBar editor={editorRef} />
      </div>

      <WasteEditor editorRef={editorRef} paste={paste} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const result = await Paste.findById(params.id).lean();
  const paste = JSON.parse(JSON.stringify(result, replaceDates));

  return { props: { paste } };
}

export default PastePage;
