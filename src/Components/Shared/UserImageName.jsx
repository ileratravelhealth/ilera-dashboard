import React from "react";
import profile from "../../assets/icons/itachi.jpg";
import { image_url_gen } from "../../Utils/BaseUrl";
const UserImageName = ({ name, image }) => {
  console.log(image);
  return (
    <div className="start-center gap-2">
      <img
        src={image ? image_url_gen(image) : profile}
        alt={name}
        className="h-10 w-10 rounded-md object-cover"
      />
      <p className="text-base capitalize font-medium">{name}</p>
    </div>
  );
};

export default UserImageName;
