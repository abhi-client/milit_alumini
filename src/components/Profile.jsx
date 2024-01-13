import { useState } from "react";
import AwesomeSlider from "react-awesome-slider";

export default function Profile({
  batch = { title: "TSC", value: 23, id: 1 },
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const sub = ["ARMY", "AF", "NAVY"];
  if (batch.title === "DSTSC")
    return (
      <>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          {sub[activeSlide] == "AF" ? "AIR FORCE" : sub[activeSlide]}
        </div>
        <AwesomeSlider
          selected={activeSlide}
          bullets={false}
          onTransitionEnd={(e) => {
            setActiveSlide(e.currentIndex);
          }}
        >
          {Array.apply(null, Array(3)).map((_, id) => (
            <img
              key={id}
              src={`/images/${batch.title}/${batch.id}${sub[activeSlide]}.JPG`}
              alt=""
              style={{ objectFit: "contain", width: "100%", height: "88vh" }}
            />
          ))}
        </AwesomeSlider>
      </>
    );
  return (
    <img
      src={`/images/${batch.title}/${batch.id}.JPG`}
      alt=""
      style={{ objectFit: "contain", width: "100%", height: "88vh" }}
    />
  );
}

Profile.propTypes = {
  batch: {},
};
