import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const SaveIcon = ({ isSolid, onClick }) => {
  return (
    <div onClick={onClick}>{isSolid ? <BsBookmarkFill /> : <BsBookmark />}</div>
  );
};

export default SaveIcon;
