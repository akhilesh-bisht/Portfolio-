import profilePicture from "../../assets/profileImage.jpg";
import LinksContainer from "../linksContainer/linksContainer";
const ProfilePicture: React.FC = () => {
  return (
    <div
      className={
        "flex justify-self-start h-2/4 md:h-3/4 aspect-square relative items-center justify-center"
      }
    >
      <img
        className={
          "w-28 h-28 md:w-60 md:h-60 border border-black rounded-full animate-grow"
        }
        src={profilePicture}
      />
      <LinksContainer />
    </div>
  );
};
export default ProfilePicture;
