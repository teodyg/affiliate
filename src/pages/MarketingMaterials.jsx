import Sidebar from '../components/Sidebar'
import MarketingMaterials from '../components/MarketingMaterials'
import "../assets/css/dashboard.css";


export default function Dashboard() {
    return (
        <>
        <div className="dashboard_component">
            <Sidebar />
            <MarketingMaterials />
        </div>
        </>
    )
}