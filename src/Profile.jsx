export default function Profile({ officer, handleClose }) {
  return (
    <>
      <div style={{ height: "10vh" }} className="flex">
        <div
          className="flex p-6 dark:bg-gray-900 dark:text-gray-100 gap-10"
          style={{ flex: 1 }}
        >
          LOGO
        </div>
        <div
          style={{ padding: "20px", color: "black", cursor: "pointer" }}
          onClick={handleClose}
        >
          X
        </div>
      </div>
      <div
        className="flex from-purple-100 via-red-300 to-indigo-500 bg-gradient-to-br "
        style={{ height: "90vh" }}
      >
        <div
          className="flex p-6 dark:bg-gray-900 dark:text-gray-100 gap-10"
          style={{ flex: 1 }}
        >
          <div
            style={{ width: "50%" }}
            className="flex items-center justify-center"
          >
            <img
              src={"/imgs/" + officer.profileUrl}
              alt=""
              className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square rounded"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-xl font-semibold">{officer.name}</h2>
            <span className="block pb-2 text-sm dark:text-gray-400">
              {officer.designation}
            </span>
            <p>{officer.details}</p>
          </div>
        </div>
      </div>
    </>
  );
}

Profile.propTypes = {
  officer: {
    profileUrl: String,
    name: String,
    designation: String,
    details: String,
  },
  handleClose: Function,
};
