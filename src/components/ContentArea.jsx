import AffiliateLinks from "./AffiliateLinks";
import CircularGraph from "./CircularGraph";
import StatusOverviewReport from "./StatusOverviewReport";
import ERCApplicationPipeline from "./ERCApplicationPipeline";

export default function ContentArea() {
  return (
    <div className="dashboard_content-right">
      <div className="dashboard_content-padding">
          <CircularGraph />
          <StatusOverviewReport />
          <ERCApplicationPipeline />
          <AffiliateLinks />
      </div>
    </div>
  )
}