import './sustainabilityPage.css';
import { SustainableFashion } from '../../components/SustainableFashion/SustainableFashion.jsx';
import { HeaderSustainability } from '../../components/HeaderSustainability/HeaderSustainability.jsx';

export const SustainabilityPage = () => {
  return (
    <>
      <HeaderSustainability></HeaderSustainability>
      <SustainableFashion></SustainableFashion>
    </>
  );
};
