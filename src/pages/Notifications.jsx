import Sidebar from '../components/Sidebar'
import Notifications from '../components/Notifications'
import "../assets/css/dashboard.css";


export default function Dashboard() {
    return (
        <>
        <div className="dashboard_component">
            <Sidebar />
            <Notifications />
        </div>
        </>
    )
}