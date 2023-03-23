import { useNavigate } from 'react-router-dom';

interface SplashProps {
  canProfileClick?: boolean;
}

const Splash = ({ canProfileClick }: SplashProps) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (!canProfileClick) return;
    navigate('/profile');
  };

  return (
    <div className="max-h-[100vh] min-h-[100vh] h-[100vh] flex items-center justify-center">
      <div
        className={`relative text-[black] select-none p-4 ${
          canProfileClick ? 'cursor-pointer' : 'cursor-default'
        }`}
        onClick={handleProfileClick}
      >
        <div data-replace="Explore ►" className="splash-title text-[black] text-4xl text-center">
          <span>John Nguyen</span>
        </div>
      </div>
    </div>
  );
};

export default Splash;
