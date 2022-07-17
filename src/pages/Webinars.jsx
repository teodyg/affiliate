import Sidebar from '../components/Sidebar'
import Webinars from '../components/Webinars'
import "../assets/css/dashboard.css";


export default function Dashboard() {
    return (
        <>
        <div className="dashboard_component">
            <Sidebar />
            <Webinars />
        </div>
        </>
    )
}