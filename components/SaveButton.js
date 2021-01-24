import { useRouter } from "next/router";
import { RiSave3Fill } from "react-icons/ri";
import { replaceDates } from "../utils/api";

const SaveButton = ({ editor, wasteId }) => {
  const router = useRouter();

  async function newPaste(body) {
    try {
      const contentType = "application/json";
      const res = await fetch(`/api/pastes`, {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(body),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();
      const id = data._id;
      router.push(`/${id}`);
    } catch (error) {
      console.error(error);
    }
  }

  async function updatePaste(id, body) {
    try {
      const res = await fetch(`/api/pastes/${id}`, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      router.push(`/${id}`);
    } catch (error) {
      console.error(error);
    }
  }
  const handleSave = async () => {
    const wasteBody = editor.current.getValue();
    if (wasteId) {
      updatePaste(wasteId, wasteBody);
    } else {
      newPaste(wasteBody);
    }
  };

  return (
    <button onClick={handleSave}>
      <RiSave3Fill size={30} />
    </button>
  );
};

export { SaveButton };
