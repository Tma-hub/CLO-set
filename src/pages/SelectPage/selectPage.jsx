import { Header } from '../../components/Header/Header';
import data from '../../../api/data.json';
import './selectPage.css';
import { Filter } from '../../components/Filter/Filter';
import { Link } from 'react-router-dom';

export const SelectPage = () => {
  return (
    <>
      <Header></Header>
      <Filter></Filter>
      <div className="get_data">
        {data.map((item) =>
          item.img ? (
            <Link to={'/selected-item/' + item.id} key={item.id}>
              <img src={`/fotky/${item.img}`} />
            </Link>
          ) : null,
        )}
      </div>
    </>
  );
};
