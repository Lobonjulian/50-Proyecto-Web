import LogoRoomBeat from "/logo.svg";

import '../../styles/part.css'

const Logo = () => {
  return (
    <a  href="/" className="logo">
      <img src={LogoRoomBeat} alt="Logo de RoomBeats" />
      <p className="logo__text">RoomBeat</p>
    </a>
  );
};

export default Logo;
