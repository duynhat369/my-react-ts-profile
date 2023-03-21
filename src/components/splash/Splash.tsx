interface SplashProps {
  canProfileClick?: boolean;
}

const Splash = ({ canProfileClick }: SplashProps) => {
  const handleProfileClick = () => {
    if (!canProfileClick) return;
  };
  return (
    <div
      className={`text-[black] text-4xl ${canProfileClick ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={handleProfileClick}
    >
      John Nguyen
    </div>
  );
};

export default Splash;
