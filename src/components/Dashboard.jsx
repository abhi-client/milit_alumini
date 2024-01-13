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
    { title: "TSC", value: 23 },
    { title: "NTSC", value: 41 },
    { title: "TSOC", value: 43 },
    { title: "DSTSC", value: 6 },
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
          marginTop: "30px",
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
        <div style={{fontSize:'40px'}}>
          {batch[activeSlide]?.title}{" "}
          {activeBatchInfo.id ? " - " + activeBatchInfo.id : ""}
        </div>
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
                  className={"box box-" + bach.title}
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
