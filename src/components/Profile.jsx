import { useState } from "react";
import AwesomeSlider from "react-awesome-slider";

export default function Profile({
  batch = { title: "TSC", value: 23, id: 1 },
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const sub = ["ARMY", "AF", "NAVY"];
  if (batch.title.split('(')[1].split(')')[0] === "DSTSC")
    return (
      <>
        <div style={{ textAlign: "center", marginTop: "10px",fontSize:'30px' }}>
          {sub[activeSlide] == "AF" ? "AIR FORCE" : sub[activeSlide]}
        </div>
        <AwesomeSlider
          selected={activeSlide}
          bullets={false}
          onTransitionEnd={(e) => {
            setActiveSlide(e.currentIndex);
          }}
        >
          {Array.apply(null, Array(3)).map((_, id) => {
            const url = `/images/${batch.title.split('(')[1].split(')')[0]}/${batch.id}${sub[id]}.JPG`
            console.log(url)
            return (
              <div key={id}>
            <img
              
              src={url}
              alt=""
              style={{ objectFit: "contain", width: "100%", height: "80vh" }}
            /></div>
          )})}
        </AwesomeSlider>
      </>
    );
  return (
    <img
      src={`/images/${batch.title.split('(')[1].split(')')[0]}/${batch.id}.JPG`}
      alt=""
      style={{ objectFit: "contain", width: "100%", height: "88vh" }}
    />
  );
}

Profile.propTypes = {
  batch: {},
};
