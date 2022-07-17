export default function CircularGraph() {
  return (
    <div className="section-top-wrapper">
      <div className="top-component_wrapper">
          <div className="top-component_title">
            <div className="heading-small">Monthly Commissions</div>
          </div>
          <div className="top-component_chart">
            <div className="donut-monthly-commissions">
                <div className="donut-hole"></div>
            </div>
          </div>
          <div className="top-compnent_money-wrapper">
            <div className="money-title-top">Total earned</div>
            <div className="money-earned">$32,500</div>
            <div className="money-title-top">Paid out</div>
            <div className="money-paid is-commission">$14,500</div>
          </div>
      </div>
      <div className="top-component_wrapper">
          <div className="top-component_title">
            <div className="heading-small">Total Commissions</div>
          </div>
          <div className="top-component_chart">
            <div className="donut-total-commissions">
                <div className="donut-hole"></div>
            </div>
          </div>
          <div className="top-compnent_money-wrapper">
            <div className="money-title-top">Total earned</div>
            <div className="money-earned">$417,000</div>
            <div className="money-title-top">Paid out</div>
            <div className="money-paid is-commission">$375,500</div>
          </div>
      </div>
      <div className="top-component_wrapper">
          <div className="top-component_title">
            <div className="heading-small">Monthly Overrides</div>
          </div>
          <div className="top-component_chart">
            <div className="donut-monthly-overrides">
                <div className="donut-hole"></div>
            </div>
          </div>
          <div className="top-compnent_money-wrapper">
            <div className="money-title-top">Total earned</div>
            <div className="money-earned">$3,200</div>
            <div className="money-title-top">Paid out</div>
            <div className="money-paid is-override">$1,800</div>
          </div>
      </div>
      <div className="top-component_wrapper">
          <div className="top-component_title">
            <div className="heading-small">Total Overrides</div>
          </div>
          <div className="top-component_chart">
            <div className="donut-total-overrides">
                <div className="donut-hole"></div>
            </div>
          </div>
          <div className="top-compnent_money-wrapper">
            <div className="money-title-top">Total earned</div>
            <div className="money-earned">$50,000</div>
            <div className="money-title-top">Paid out</div>
            <div className="money-paid is-override">$6,000</div>
          </div>
      </div>
      <div className="top-component_wrapper">
          <div className="top-component_title">
            <div className="heading-small">Total Bonuses</div>
          </div>
          <div className="top-component_chart">
            <div className="donut-total-bonuses">
                <div className="donut-hole"></div>
            </div>
          </div>
          <div className="top-compnent_money-wrapper">
            <div className="money-title-top">Total earned</div>
            <div className="money-earned">$2,500</div>
            <div className="money-title-top">Paid out</div>
            <div className="money-paid">$2,000</div>
          </div>
      </div>
    </div>
  )
}