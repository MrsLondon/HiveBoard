
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams(); // This extracts the dynamic id from the URL

  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default UserDetails;
