import { Title } from '../Title/Title';
import { Carousel } from '../Carousel/Carousel';
import './AddNew.css';

export const AddNew = () => {
  return (
    <div className="add__new">
      <div className="add__title">
        <Title sectionTitle={'Přidej nový kousek do svého šatníku'} />
      </div>
      <Carousel />
    </div>
  );
};
