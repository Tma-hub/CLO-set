import './selectedItemPage.css';
import { Header } from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import { findData, select } from '../../lib/match';

export const SelectedItemPage = () => {
  const { id } = useParams();
  const selectedItem = findData({ id: Number(id) });
  const data = select(selectedItem);
  return (
    <>
      <Header />
      <div className="selectedItemWrapper">
        <img className="selectedItem" src={`/fotky/${selectedItem.img}`} />
        <h2>Hodí se k sobě:</h2>
        <div className="get_data">
          {data.length > 0
            ? data.map((item) =>
                item.img ? (
                  <img key={item.id} src={`/fotky/${item.img}`} />
                ) : null,
              )
            : 'Nic tu neni'}
        </div>
      </div>
    </>
  );
};
