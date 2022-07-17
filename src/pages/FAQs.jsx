import Sidebar from '../components/Sidebar'
import FAQs2 from '../components/FAQs2'
import "../assets/css/dashboard.css";


export default function Dashboard() {
    return (
        <>
        <div className="dashboard_component">
            <Sidebar />
            <FAQs2 />
        </div>
        </>
    )
}