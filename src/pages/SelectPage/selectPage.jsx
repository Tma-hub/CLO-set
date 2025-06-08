import { Header } from '../../components/Header/Header';
import data from '../../../api/data.json';
import './selectPage.css';

export const SelectPage = () => {
  return (
    <>
      <Header></Header>
      <div className="get_data">
        {data.map((item) =>
          item.img ? (
            <img key={item.id} src={`/fotky/${item.img}`}></img>
          ) : null,
        )}
      </div>
    </>
  );
};
