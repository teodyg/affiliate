import IconCopy from './IconCopy'

export default function AffiliateLinks() {
  return (
    <>
      <div className="margin-bottom margin-xsmall">
        <div className="section-right_title">AFFILIATE&nbsp;LINKS <span className="title_span">(Click to copy to clipboard)</span></div>
      </div>
      <div className="section-bottom-overflow">
        <div className="section-overflow-wrapper">
          <a href="https://taxrebatespecialists.com/" className="affiliate-links_block-wrapper w-inline-block">
            <div className="margin-bottom margin-tiny">
              <div className="heading-medium">Prequalification page</div>
            </div>
            <div className="margin-bottom margin-small">
              <div className="heading-xsmall">TaxRebateSpecialists.com/dave</div>
            </div>
            <div className="affiliat_click-to-copy-wrapper">
              <div className="icon-container">
                <div className="html-embed w-embed">
                  <IconCopy />
                </div>
              </div>
              <div className="text-size-medium">Click to copy website address</div>
            </div>
          </a>
          <a href="https://taxrebatespecialists.com/ercapp/" className="affiliate-links_block-wrapper w-inline-block">
            <div className="margin-bottom margin-tiny">
              <div className="heading-medium">ERC application page</div>
            </div>
            <div className="margin-bottom margin-small">
              <div className="heading-xsmall">TaxRebateSpecialists.com/dave/ercapp</div>
            </div>
            <div className="affiliat_click-to-copy-wrapper">
              <div className="icon-container">
                <div className="html-embed w-embed">
                  <IconCopy />
                </div>
              </div>
              <div className="text-size-medium">Click to copy website address</div>
            </div>
          </a>
          <a href="https://taxrebatespecialists.com/affiliate" className="affiliate-links_block-wrapper w-inline-block">
            <div className="margin-bottom margin-tiny">
              <div className="heading-medium">Affiliate sign up page</div>
            </div>
            <div className="margin-bottom margin-small">
              <div className="heading-xsmall">TaxRebateSpecialists.com/dave/affiliate</div>
            </div>
            <div className="affiliat_click-to-copy-wrapper">
              <div className="icon-container">
                <div className="html-embed w-embed">
                  <IconCopy />
                </div>
              </div>
              <div className="text-size-medium">Click to copy website address</div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}