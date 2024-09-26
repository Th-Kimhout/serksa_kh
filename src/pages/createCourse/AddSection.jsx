import { useParams } from "react-router-dom";

export function AddSection(courseID) {
  let courseID = useParams();

  return (
    <div>
      <h1>Add Section</h1>
    </div>
  );
}
