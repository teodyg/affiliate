import Sidebar from '../components/Sidebar'
import Reports from '../components/Reports'
import "../assets/css/dashboard.css";


export default function Dashboard() {
    return (
        <>
        <div className="dashboard_component">
            <Sidebar />
            <Reports />
        </div>
        </>
    )
}