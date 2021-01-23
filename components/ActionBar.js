import { RiSave3Fill } from "react-icons/ri";
import { VscNewFile } from "react-icons/vsc";

const SaveButton = ({ paste }) => {
  const submit = async () => {
    try {
      const contentType = "application/json";
      const res = await fetch(`/api/pastes/${id}`, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(paste),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      const id = data._id;

      // mutate(`/api/pets/${id}`, data, false) // Update the local data without a revalidation
      router.push(`/${id}`);
    } catch (error) {
      setMessage("Failed to update paste");
    }
  };

  return (
    <button onClick>
      <RiSave3Fill size={30} />
    </button>
  );
};

const NewButton = () => (
  <button>
    <VscNewFile size={30} />
  </button>
);

const ActionBar = ({ paste }) => {
  return (
    <div className="action-bar">
      <h1>wastebin</h1>
      <SaveButton paste={paste} />
      <NewButton />
    </div>
  );
};

export { ActionBar };
