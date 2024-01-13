import AwesomeSlider from "react-awesome-slider";
import "../styles/searched_profile.css";
import { useEffect, useState } from "react";

export default function SearchedProfile({ officers }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    setActive(0);
  }, [officers]);

  return (
    <div id="searched-profile">
      {officers.length > 0 && (
        <AwesomeSlider
          infinite={false}
          mobileTouch={true}
          selected={active}
          onTransitionEnd={(e) => {
            setActive(e.currentIndex);
          }}
        >
          {officers.map((officer) => (
            <div className="profile-container" key={officer.id}>
              <img
                className="image"
                src={`/images/profile/${officer.profile}`}
                alt=""
                width={"40%"}
              />
              <img
                className="image"
                src={`/images/details/${officer.details}`}
                alt=""
                width={"60%"}
              />
            </div>
          ))}
        </AwesomeSlider>
      )}
      {officers.length == 0 && (
        <div className="profile-container-not-found">No profile found</div>
      )}
    </div>
  );
}

SearchedProfile.propTypes = {
  officers: {
    profileUrl: String,
    descriptionUrl: String,
    name: String,
  },
};
