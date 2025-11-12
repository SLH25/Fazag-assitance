import HeroProfile from './HeroProfile';
import AboutProfile from './DomainePage/AboutProfile';
import MainProfile from './ProfilsSectionPage/MainProfile';

const ProfilePage = () => {
  return (
    <div>
      <HeroProfile />
      <AboutProfile />
      <MainProfile />
    </div>
  );
};

export default ProfilePage;
