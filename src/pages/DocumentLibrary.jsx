import Sidebar from '../components/Sidebar'
import DocumentLibrary from '../components/DocumentLibrary'
import "../assets/css/dashboard.css";


export default function Dashboard() {
    return (
        <>
        <div className="dashboard_component">
            <Sidebar />
            <DocumentLibrary />
        </div>
        </>
    )
}