import Sidebar from '../components/Sidebar'
import TrainingVideos from '../components/TrainingVideos'
import "../assets/css/dashboard.css";


export default function Dashboard() {
    return (
        <>
        <div className="dashboard_component">
            <Sidebar />
            <TrainingVideos />
        </div>
        </>
    )
}