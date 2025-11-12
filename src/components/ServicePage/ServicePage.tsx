import HeroService from './HeroService';
import AboutService from './AboutService';
import MainService from './MainService';

const ServicePage = () => {
  return (
    <div>
      <HeroService />
      <MainService />
      <AboutService />
    </div>
  );
};

export default ServicePage;
