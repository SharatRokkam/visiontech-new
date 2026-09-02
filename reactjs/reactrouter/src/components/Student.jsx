import { useParams } from "react-router-dom";

const Student = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Student Id: {id}</h1>
    </>
  );
};

export default Student;
