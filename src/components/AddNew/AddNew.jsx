import { Title } from '../Title/Title';
import { Carousel } from '../Carousel/Carousel';

export const AddNew = () => {
  return (
    <div className="add__new">
      <Title sectionTitle={'Přidej nový kousek do svého šatníku'} />
      <Carousel />
    </div>
  );
};
