export default function Profile({
  batch = { title: "ABC", value: 12, id: 1 },
}) {
  // @TODO
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
