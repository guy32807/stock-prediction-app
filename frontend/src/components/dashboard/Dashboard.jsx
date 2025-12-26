import { useEffect } from "react";
import axiosInstance from "../../axiosInstance";

const Dashboard = () => {
  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axiosInstance.get("/protected-view/");
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error fetching protected data:", error);
      }
    };

    fetchProtectedData();
  }, []);
  return <div className="container">Dashboard</div>;
};
export default Dashboard;
