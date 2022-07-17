import BeginQualifyButton from "./BeginQualifyButton"

export default function CTA1() {
    return (
        <section className="section-cta">
            <div className="continer-leage">
                <div className="page-padding">
                    <div className="container-large">
                        <div className="padding-vertical padding-xxhuge">
                            <div className="max-width-medium">
                                <div className="margin-bottom margin-small">
                                    <h2 className="text-color-white" data-textarea="ta5a138cc9">
                                        These funds <br />
                                        won't last forever
                                    </h2>
                                </div>
                                <p
                                    className="text-size-medium text-color-white"
                                    data-text="t13c641b9"
                                >
                                    Take advantage of the Employee Retention Credit (ERC) before it
                                    runs out of money. Let's go after your ERC rebate today.
                                </p>
                                <div className="margin-top margin-small">
                                    <div className="button-row">
                                        <div className="button-wrapper">
                                            <BeginQualifyButton />
                                        </div>
                                        {/* <div class="button-wrapper">
                  <a href="#video" class="button-secondary is-alternate w-button" data-text="t3f767dca" data-link="a4269b238">Watch video</a>
                </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}