import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'
import "../assets/css/dashboard.css";


export default function Dashboard() {
    return (
        <>
        <div className="dashboard_component">
            <Sidebar />
            <Profile />
        </div>
        </>
    )
}