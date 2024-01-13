export default function Profile({
  batch = { title: "TSC", value: 23, id: 1 },
}) {
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
