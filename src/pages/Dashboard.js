
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <p>This is your dashboard.</p>
    </div>
  );
};

export default Dashboard;
