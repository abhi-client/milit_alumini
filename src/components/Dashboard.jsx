import { useState } from "react";
import Profile from "./Profile";
import AwesomeSlider from "react-awesome-slider";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [isSelected, setIsSelected] = useState();
  const [activeBatchInfo, setActiveBatchInfo] = useState({});
  const [activeSlide, setActiveSlide] = useState(0);

  const handleClose = () => {
    setActiveBatchInfo({});
    setIsSelected(false);
  };

  const batch = [
    { title: "", value: 0 },
    { title: "Technical Staff Course (TSC)", value: 23 },
    { title: "Naval Technical Staff Course (NTSC)", value: 41 },
    { title: "Technical Staff Officers Course (TSOC)", value: 43 },
    { title: "Defence Services Technical Staff Course (DSTSC)", value: 6 },
  ];

  return (
    <div id="dashboard" style={{ minHeight: "95vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          minHeight:'50px'
        }}
      >
        {isSelected ? (
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              left: "100px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",

              outline: "none",
              border: "none",
              background: "none",
            }}
          >
            <img
              src="/images/back_arrow.svg"
              alt=""
              style={{ width: "20px" }}
            />{" "}
            back
          </button>
        ) : (
          <></>
        )}
        <div style={{fontSize:'30px', fontWeight:'bolder'}}>
          {batch[activeSlide]?.title}{" "}
          {activeBatchInfo.id ? " - " + activeBatchInfo.id : ""}
        </div>
        <button onClick={()=>{
          setActiveSlide(0);
          handleClose();
        }}
        style={{
          position: "absolute",
              right: "100px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",

              outline: "none",
              border: "none",
              background: "none",
        }}

        > <img
        src="/images/house-solid.svg"
        alt=""
        style={{ width: "20px" }}
      />{" "}
      Home</button>
      </div>
      {isSelected ? (
        <Profile batch={activeBatchInfo} />
      ) : (
        <AwesomeSlider
          selected={activeSlide}
          bullets={false}
          onTransitionEnd={(e) => {
            setActiveSlide(e.currentIndex);
          }}
        >
          {batch.map((bach,id) => id==0?<div><img
              src="/images/bg.JPG"
              alt=""
              style={{ width: "100%", height:'100vh',objectFit:'cover' }}
            /></div>:
            <div key={bach.title} className="container">
              {Array.apply(null, Array(bach.value)).map((_, id) => (
                <div
                  key={id}
                  className={"box box-" + bach.title.split('(')[1].split(')')[0]}
                  onClick={() => {
                    setIsSelected(true);
                    setActiveBatchInfo({ ...bach, id: id + 1 });
                  }}
                >
                  {id + 1}
                </div>
              ))}
            </div>
          )}
        </AwesomeSlider>
      )}
    </div>
  );
}
