import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'
import "../assets/css/simple-trs-dashboard.css";


export default function Dashboard() {
    return (
        <>
        <div className="dashboard_component">
            <Sidebar />
            <ContentArea />
        </div>
        </>
    )
}