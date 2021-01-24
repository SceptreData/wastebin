import { VscNewFile } from "react-icons/vsc";

import {SaveButton} from './SaveButton'

const NewButton = () => (
  <button>
    <VscNewFile size={30} />
  </button>
);

const ActionBar = ({ editor, wasteId=null}) => {
  return (
      <div className="action-bar">
        <h1>wastebin</h1>
        <SaveButton editor={editor} wasteId={wasteId}/>
        <NewButton />
      </div>
  );
};

export { ActionBar };
