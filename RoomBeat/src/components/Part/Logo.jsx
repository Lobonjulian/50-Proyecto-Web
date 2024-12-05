import LogoRoomBeat from "/logo.svg";

import '../../styles/part.css'

const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoRoomBeat} alt="Logo de RoomBeats" />
      <p className="logo__text">RoomBeat</p>
    </div>
  );
};

export default Logo;
