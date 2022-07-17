import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
      <div className="dashboard_content-left">
        <div className="dashboard_left-panel-section">
          <div className="dashboard_profile-wrapper">
            <div className="margin-bottom margin-medium">
              <div className="logo-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9c6dfb362d16afd006a39_TRS%20color%20dashboard%20logo.svg" loading="lazy" alt="Tax Rebate Specialists logo" className="trs-logo" /></div>
            </div>
            <div className="profile-content">
              <div className="profile_picture"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9cb5965c5295bc6cfb86f_trs-sample-affiliate-profile.png" loading="lazy" srcset="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9cb5965c5295bc6cfb86f_trs-sample-affiliate-profile-p-500.png 500w, https://assets.website-files.com/62c9485db362d1f065faa71b/62c9cb5965c5295bc6cfb86f_trs-sample-affiliate-profile.png 600w" alt="Affiliate profile picture" sizes="(max-width: 479px) 21vw, (max-width: 991px) 100px, 1vw" className="image" /></div>
              <div className="profile_info">
                <div className="heading-medium">%fullname%</div>
                <div className="text-size-regular">TRS&nbsp;<span className="title-pro">%membership-type%</span>&nbsp;AFFILIATE</div>
                <div className="text-size-small">ID# %%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard_left-panel-section">
          <div className="qualification-tab-wrapper">
            <div className="qualification-submitted-wrapper">
              <div className="submitted_text-wrapper">
                <div className="text-weight-bold">Submitted ERC&nbsp;applications</div>
                <div className="text-size-small">Three "WON" applications unlocks PRO&nbsp;affiliate.</div>
              </div>
              <div className="submitted_icons-wrapper">
                <div className="tab_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9dcdbd36ebc799deb743f_bx-badge-check-complete-trs.svg" loading="lazy" alt="Badge check completed icon" className="tab-icon" /></div>
                <div className="submitted_documents-wrapper">
                  <div className="qualifications_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9dd256f68924beb35ce61_bx-page-completed-trs.svg" loading="lazy" alt="Document completed icon" className="tab-icon" /></div>
                  <div className="qualifications_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9dd256f68924beb35ce61_bx-page-completed-trs.svg" loading="lazy" alt="Document completed icon" className="tab-icon" /></div>
                  <div className="qualifications_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9dd256f68924beb35ce61_bx-page-completed-trs.svg" loading="lazy" alt="Document completed icon" className="tab-icon" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard_left-panel-section">
          <div className="qualification-tab-wrapper">
            <div className="qualification-affiliate-wrapper">
              <div className="submitted_text-wrapper">
                <div className="text-weight-bold">Affiliate sign ups</div>
                <div className="text-size-small">You can add up to 5 affiliates until you achieve PRO affiliate.</div>
              </div>
              <div className="submitted_icons-wrapper">
                <div className="tab_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9da3fe691b21c3865d7b2_bx-badge-trs.svg" loading="lazy" alt="Badge incomplete icon" className="tab-icon" /></div>
                <div className="submitted_documents-wrapper">
                  <div className="qualifications_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9dc8037b2813028b58600_bx-user-complete-trs.svg" loading="lazy" alt="Affiliate added icon" className="tab-icon" /></div>
                  <div className="qualifications_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9dc8037b2813028b58600_bx-user-complete-trs.svg" loading="lazy" alt="Affiliate added icon" className="tab-icon" /></div>
                  <div className="qualifications_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9dbaf65c5290ee4d08e47_bx-user-trs.svg" loading="lazy" alt="Affiliate icon" className="tab-icon" /></div>
                  <div className="qualifications_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9dbaf65c5290ee4d08e47_bx-user-trs.svg" loading="lazy" alt="Affiliate icon" className="tab-icon" /></div>
                  <div className="qualifications_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9dbaf65c5290ee4d08e47_bx-user-trs.svg" loading="lazy" alt="Affiliate icon" className="tab-icon" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard_left-panel-section">
          <Link
            to="/profile"
            className="dash-section_tab w-inline-block"
          >
            <div className="tab-content-wrapper">
              <div className="tab_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9d3f5707bc5aa3423e8d4_bx-cool-trs.svg" loading="lazy" alt="Profile icon" className="tab-icon"/></div>
              <div className="tab-title">
                <div className="text-size-large">Profile</div>
              </div>
            </div>
          </Link>
        </div>
          <div className="dashboard_left-panel-section">
          <Link
            to="/dashboard"
            className="dash-section_tab is-current w-inline-block"
          >
            <div className="tab-content-wrapper">
              <div className="tab_image-wrapper tab-is-active"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9e60365c529fc45d11b6d_bx-bar-chart-square-trs-hover.svg" loading="lazy" alt="Dashboard icon" className="tab-icon" /></div>
              <div className="tab-title">
                <div className="text-size-large">Dashboard</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="dashboard_left-panel-section">
          <Link
            to="/first-steps"
            className="dash-section_tab w-inline-block"
          >
            <div className="tab-content-wrapper">
              <div className="tab_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9d718ca69f377dc9bff94_bx-trip-trs.svg" loading="lazy" alt="First steps icon" className="tab-icon" /></div>
              <div className="tab-title">
                <div className="text-size-large">First steps</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="dashboard_left-panel-section">
          <Link
            to="/document-library"
            className="dash-section_tab w-inline-block"
          >
            <div className="tab-content-wrapper">
              <div className="tab_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9d72d09e7a20560e786f7_bx-book-trs.svg" loading="lazy" alt="Document library icon" className="tab-icon" /></div>
              <div className="tab-title">
                <div className="text-size-large">Document library</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="dashboard_left-panel-section">
          <Link
            to="/webinars"
            className="dash-section_tab w-inline-block"
          >
            <div className="tab-content-wrapper">
              <div className="tab_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9d73f09e7a26ffce7885d_bx-event-trs.svg" loading="lazy" alt="Webinars and calls icon" className="tab-icon" /></div>
              <div className="tab-title">
                <div className="text-size-large">Webinars &amp; calls</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="dashboard_left-panel-section">
          <Link
            to="/marketing-materials"
            className="dash-section_tab w-inline-block"
          >
            <div className="tab-content-wrapper">
              <div className="tab_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9d75709e7a25b34e788c6_bx-image-trs.svg" loading="lazy" alt="Marketing materials icon" className="tab-icon" /></div>
              <div className="tab-title">
                <div className="text-size-large">Marketing materials</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="dashboard_left-panel-section">
          <Link
            to="/training-videos"
            className="dash-section_tab w-inline-block"
          >
            <div className="tab-content-wrapper">
              <div className="tab_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9d769c5049601deb26002_bx-slideshow-trs.svg" loading="lazy" alt="Training videos icon" className="tab-icon" /></div>
              <div className="tab-title">
                <div className="text-size-large">Training videos</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="dashboard_left-panel-section">
          <Link
            to="/reports"
            className="dash-section_tab w-inline-block"
          >
            <div className="tab-content-wrapper">
              <div className="tab_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9d77bbf7adcabaa1c897b_bx-money-withdraw-trs.svg" loading="lazy" alt="Reports icon" className="tab-icon" /></div>
              <div className="tab-title">
                <div className="text-size-large">Reports</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="dashboard_left-panel-section">
          <Link
            to="/notifications"
            className="dash-section_tab w-inline-block"
          >
            <div className="tab-content-wrapper">
              <div className="tab_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9d78c903d34289108f095_bx-message-dots-trs.svg" loading="lazy" alt="Notifications icon" className="tab-icon" /></div>
              <div className="tab-title">
                <div className="text-size-large">Notifications</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="dashboard_left-panel-section">
          <Link
            to="/faqs"
            className="dash-section_tab w-inline-block"
          >
            <div className="tab-content-wrapper">
              <div className="tab_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9d79de691b2c6c665bcda_bx-list-ul-trs.svg" loading="lazy" alt="FAQs icon" className="tab-icon" /></div>
              <div className="tab-title">
                <div className="text-size-large">FAQs</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="dashboard_left-panel-section">
          <Link
            to="/support"
            className="dash-section_tab w-inline-block"
          >
            <div className="tab-content-wrapper">
              <div className="tab_image-wrapper"><img src="https://assets.website-files.com/62c9485db362d1f065faa71b/62c9d7af09e7a2a989e78b2a_bx-conversation-trs.svg" loading="lazy" alt="Support icon" className="tab-icon" /></div>
              <div className="tab-title">
                <div className="text-size-large">Support</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
}