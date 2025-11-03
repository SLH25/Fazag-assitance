import HeroService from './HeroService';
import AboutService from './AboutService';
import MainService from './MainService';

const ServicePage = () => {
  return (
    <div>
      <HeroService />
      <AboutService />
      <MainService />
    </div>
  );
};

export default ServicePage;
