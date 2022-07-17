import Sidebar from '../components/Sidebar'
import Support from '../components/Support'
import "../assets/css/dashboard.css";


export default function Dashboard() {
    return (
        <>
        <div className="dashboard_component">
            <Sidebar />
            <Support />
        </div>
        </>
    )
}