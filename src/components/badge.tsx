import { useState } from 'react';
type Props = {
  userName: string;
  userEmail: string;
  userAvatar: string;
  userState: 'online' | 'offline';
};

export const Badge = (props: Props) => {
  const { userName, userEmail, userAvatar, userState } = props;
  const [isHovered, setIsHovered] = useState(false);
  const showOnHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className="w-12">
      <div className="relative" onMouseOver={showOnHover} onMouseLeave={showOnHover}>
        <img id="badge" className="rounded-full" src={userAvatar} alt={userName} />
        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${userState === 'online' ? 'bg-green-500' : 'bg-gray-500'}`}></div>
        {isHovered && (
          <div id="badge-info" className="absolute z-10 w-32 px-[5px] py-[2px] bg-black text-white text-xs">
            {userName}
            {userEmail}
          </div>
        )}
      </div>
    </div>
  );
};
