import { Link } from "react-router-dom";
import kanban from "../kanban.json"; // Correct relative path

const Home = () => {
  return (
    <div>
      <h1>Kanban Board</h1>
      <ul>
        {kanban.map((task) => (
          <li key={task.id}>
            <Link to={`/users/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
