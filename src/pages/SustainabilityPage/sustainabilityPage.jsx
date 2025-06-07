import './sustainabilityPage.css';
import { SustainableFashion } from '../../components/SustainableFashion/SustainableFashion.jsx';
import { Sustainability } from '../../components/Sustainability/Sustainability.jsx';
import { HeaderSustainability } from '../../components/HeaderSustainability/HeaderSustainability.jsx';

export const SustainabilityPage = () => {
  return (
    <>
      <HeaderSustainability></HeaderSustainability>
      <Sustainability></Sustainability>
      <SustainableFashion></SustainableFashion>
    </>
  );
};
