import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dbConnect from "../../utils/dbConnect";

import { WasteEditor } from "../../components/WasteEditor";
import Paste from "../../models/Paste";

/* Allows you to view pet card info and delete pet card*/
const PastePage = ({ paste }) => {
  // const router = useRouter()
  // const [message, setMessage] = useState('')
  // const handleDelete = async () => {
  //   const petID = router.query.id

  //   try {
  //     await fetch(`/api/pets/${petID}`, {
  //       method: 'Delete',
  //     })
  //     router.push('/')
  //   } catch (error) {
  //     setMessage('Failed to delete the pet.')
  //   }
  // }

  return (
    <div key={pet._id}>
      <WasteEditor body={paste.body} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect()

  const paste = await Paste.findById(params.id).lean();

  return { props: { paste } };
}

export default PetPage
