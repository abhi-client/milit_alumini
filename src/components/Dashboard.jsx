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

  // @TODO
  const batch = [
    { title: "ABC", value: 12 },
    { title: "XYZ", value: 25 },
    { title: "PQR", value: 42 },
    { title: "LMN", value: 6 },
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
          <div
            onClick={handleClose}
            style={{
              position: "absolute",
              left: "30px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <img
              src="/images/back_arrow.svg"
              alt=""
              style={{ width: "20px" }}
            />{" "}
            back
          </div>
        ) : (
          <></>
        )}
        <div>
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
          {batch.map((bach) => (
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
          ))}
        </AwesomeSlider>
      )}
    </div>
  );
}
