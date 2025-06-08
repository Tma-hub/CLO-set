import { Link } from "react-router-dom";




export const ImageLink = ({item}) => {
  return (
    <Link to={'/selected-item/' + item.id} >
      <img src={`/fotky/${item.img}`} />
    </Link>
  );
};
