import MyImg from "../assets/myimg.jpg";

const Profile = () => {
  return (
    <div
      className="text-gray-100 pt-6 mt-4 rounded-lg shadow-md"
      style={{ background: "linear-gradient(29deg, #667F2B, #764CAA)" }}
    >
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0 p-4">
        <img
          src={MyImg}
          alt="Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
        />

        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">Akhilesh Bisht</h2>
          <p className="text-sm sm:text-base font-medium mt-1">
            Full Stack Developer || Frontend Developer || Backend Developer ||
            App Developer
          </p>
        </div>

        <div className="mt-4 sm:mt-0"></div>
      </div>
    </div>
  );
};

export default Profile;
