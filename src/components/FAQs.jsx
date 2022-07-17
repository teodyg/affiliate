import Faq from "./Faq"
import BeginQualifyButton from "./BeginQualifyButton"

export default function FAQs() {
    return (
        <section id="questions" className="section-faq">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xhuge">
                        <div className="w-layout-grid faq_component">
                            <div className="faq_content">
                                <div className="margin-bottom margin-small">
                                    <h2 data-text="tn6c4c39d6">Have questions?</h2>
                                </div>
                                <p className="text-size-medium" data-text="tn36db8b51">
                                    Try some of these frequently asked questions.
                                </p>
                                <div className="margin-top margin-small">
                                    <div className="button-row">
                                        <div className="button-wrapper">
                                            <BeginQualifyButton />
                                        </div>
                                        <div className="button-wrapper">
                                            <a
                                                href="mailto:support@TaxRebateSpecialists.com?subject=I%20have%20a%20question%20(from%20website)"
                                                className="button-secondary w-button"
                                                data-text="t24e68cec"
                                                data-link="a7db63029"
                                            >
                                                Ask a question
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="faq_list">
                                <div className="w-layout-grid faq_list-grid">
                                    <Faq
                                        question='What employers are eligibile?'
                                        answer='As a measure designed to benefit employers impacted by the pandemic, 
              in order to qualify an organization must be carrying on a trade or operating as a business 
              in the financial year 2020 or 2021, as well as having experienced 1) a full or partial 
              suspension due to the pandemic, 2) supply chain disruptions due to vendors who experienced 
              shutdown orders, or 3) a significant loss of gross receipts.'
                                        questionDataText='tn346be735'
                                        answerDataText='t1ca6a052'
                                    />
                                    <Faq
                                        question='What qualifies as a "significant decline" in gross receipts?'
                                        answer='The IRS quantifies a “significant decline” differently in 2020 versus 2021, but with percentages that are based on an organization’s 2019 Gross Receipts. For 2020, the decline must be greater than 50% and for 2021, greater than 20%. In both instances, this is measured quarterly and correlates to the same quarter in 2019. An exception to this for the year 2021 is that a previous quarter could be used instead of a previous year if needed to be greater than 20%.'
                                        questionDataText='tn6acfdcf2'
                                        answerDataText='tn79eea05b'
                                    />
                                    <Faq
                                        question='Which employees qualify?'
                                        answer='The employees that qualify for ERC claims vary based on business size. For a small employer, the credit can be claimed on employee wages. For 2020, a “small employer” equates to 100 or fewer full-time employees, and for 2021, 500 full-time employees. For employers with full-time employees in numbers greater than 100 (2020) or 500 (2021), the credit can only be claimed on wages paid to employees for not working. Family members or employees who own a portion of the company are ineligible.'
                                        questionDataText='tn72c6a430'
                                        answerDataText='tn388916c4'
                                    />
                                    <Faq
                                        question='How many quarters can the ERC be claimed?'
                                        answer='The number of quarters that can be claimed depends on the eligibility. ERC funds are available for wages paid between 3/13/20 and 9/30/21. For startup businesses, wages paid between 7/1/21 and 12/31/21 are eligible.'
                                        questionDataText='tn1dcaed90'
                                        answerDataText='t4daf48b1'
                                    />
                                    <Faq
                                        question='Can I claim ERC if I received a PPP loan?'
                                        answer='Yes! With the changes signed into law with the CAA Act, you can now claim ERC funds even if you had a PPP loan. We just can&lsquo;t use the same dollar-for-dollar amount. When calculating your ERC qualification we take this into account.'
                                        questionDataText='tn68bcd3fa'
                                        answerDataText='tn19ad81c8'
                                    />
                                    <Faq
                                        question='What wages are eligible and how much can be claimed each year?'
                                        answer='For ERC purposes, wages are typically defined as gross wages. The maximum rate per employee also varies by year. For 2020, a maximum of $10,000 per employee per year, and for 2021, a maximum of $10,000 per employee per quarter can be claimed. Translating into the amount that can be claimed each year, for 2020, it’s possible to receive 50% of qualified wages up to $10,000, which is equal to $5,000 per employee per year. For 2021, employers can claim 70% of qualified wages per quarter, limited to the first three quarters, for a total of $21,000 per employee.'
                                        questionDataText='tn58b8cfb9'
                                        answerDataText='tn4db05d9a'
                                    />
                                    <Faq
                                        question='How is the ERC claimed?'
                                        answer='The ERC credit is claimed by calculating the credit based on the employee wage qualifications and then amending the associated payroll tax returns. '
                                        questionDataText='tn38591efd'
                                        answerDataText='tn2783cf81'
                                    />
                                    <Faq
                                        question='How long do I have to submit an ERC claim?'
                                        answer='Amended payroll tax returns can be filed within three years of filing Form 941. This means that for Q2 of 2020, you have until Q2 of 2023, and for Q1 of 2021, you have until Q1 of 2024, and so on.'
                                        questionDataText='tn590cc843'
                                        answerDataText='tn2025940b'
                                    />
                                    <Faq
                                        question='Are ERC funds taxable?'
                                        answer='The ERC credit is not treated as taxable income. However, it does adjust your payroll expenses. Once you receive your refund, you will be responsible for letting your CPA know the final amount and having them correctly report the changes on your business tax returns.'
                                        questionDataText='t62793582'
                                        answerDataText='tn79129cea'
                                    />
                                    <Faq
                                        question='What do "shutdowns" include?'
                                        answer='Shutdowns include business disruptions such as: full closure, partial closure, reduction in indoor dining, reduction in hours, reduction in services, staffing issues, lobby closure, travel restrictions, and reduction in capacity.'
                                        questionDataText='t4a70bb49'
                                        answerDataText='t376f22fe'
                                    />
                                    <Faq
                                        question='What is the Employee Retention Credit (ERC)?'
                                        answer='ERC is a refundable payroll tax credit. Born out of the same CARES Act as PPP, its aim is to provide economic relief for small and medium businesses who retained employees during the COVID-19 pandemic. Initially, eligible employers could only take either PPP or ERC. In 2021, as part of the Consolidated Appropriations Act, Congress amended this provision, allowing businesses to apply for both.'
                                        questionDataText='tn28f7ee80'
                                        answerDataText='t7f37c02e'
                                    />
                                    <Faq
                                        question='How is ERC different from the Paycheck Protection Program (PPP)?'
                                        answer='PPP was a forgivable loan. ERC returns the payroll taxes that your business has already paid. Once you receive the ERC funds from the US Treasury, no further action is required on your part.'
                                        questionDataText='t3ddd106f'
                                        answerDataText='t86adc22'
                                    />
                                    <Faq
                                        question='Why haven&lsquo;t I heard about ERC before?'
                                        answer='PPP was heavily marketed by the SBA, while ERC is claimed directly through the US Treasury. Along with our bank partners, it’s our mission to educate you and obtain for your business the payroll tax refund that you&lsquo;re entitled to.'
                                        questionDataText='tn225b75c3'
                                        answerDataText='t2631aa8c'
                                    />
                                    <Faq
                                        question='How is the refund calculated?'
                                        answer='Determining the proper amount that you’re entitled to is a complex accounting process. Although these are payroll tax credits, what you’ve paid in payroll tax has no bearing on your ERC calculations. The refunds are based on many factors including qualifying quarters, number of employees, hours worked, wages paid, PPP loans, group health premiums, and participation in other government programs.'
                                        questionDataText='tae68d6e'
                                        answerDataText='t7967de18'
                                    />
                                    <Faq
                                        question='Why can&lsquo;t my CPA do this?'
                                        answer='There are over 70,000 pages of tax code; it’s impossible to be an expert on all of them. ERC is all we do. It’s like the difference between your family doctor and a neurologist. By concentrating on this one program, we understand the intricacies and nuances involved in determining your eligibility and accurately calculating your maximum refunds.'
                                        questionDataText='tn6ceb2aef'
                                        answerDataText='t24a4e231'
                                    />
                                    <Faq
                                        question='How do I know if my business qualifies?'
                                        answer='The IRS expects 70–80% of small and medium businesses to qualify. If your business experienced disruptions to commerce, travel, or group meetings, you qualify! This includes supply chain disruptions, price increases, staffing shortages, difficulty hiring, reduced hours, reduction in goods or services offered, inability to travel or attend conventions. Fill out the brief pre-qualification form and talk to one of our Tax Rebate Specialists to find out more.'
                                        questionDataText='tn1575da56'
                                        answerDataText='tnfcd782f'
                                    />
                                    <Faq
                                        question='What if we wait to claim the ERC?'
                                        answer='Time is of the essence as the program has technically expired. We have a limited window of time to claw back the money which is rightfully owed to you. The program could run out of allocated funds at any time and is subject to the whims of congress. Don’t delay!'
                                        questionDataText='tn1fd1121f'
                                        answerDataText='t2d34cc2b'
                                    />
                                    <Faq
                                        question='Do I have to pay this back?'
                                        answer='No! It’s a refund of payroll taxes. It’s YOUR money! There are no restrictions on how you use it.'
                                        questionDataText='t25b2cdc7'
                                        answerDataText='tn21c82eae'
                                    />
                                    <Faq
                                        question='My business was profitable, or deemed essential, can I still qualify?'
                                        answer='Absolutely! Both essential and non-essential businesses can qualify (and a decline in revenue is not required). Many of our clients had increased sales, but still experienced disruptions or were negatively impacted.'
                                        questionDataText='tn40a5317d'
                                        answerDataText='tn5a81a7e7'
                                    />
                                    <Faq
                                        question='What is your fee and when do we pay it?'
                                        answer='There is no upfront fee or obligation to receive your refund analysis. After reviewing your analysis and engaging us to recover your refunds, our fee is 15% (with no hidden costs). You will never come out of pocket to pay our fee. We’re paid only as you receive your refund checks. Our fee includes preparation of your claims by an expert CPA or Tax Attorney who specializes in qualifying, substantiating, calculating, and claiming ERC refunds. We also stand behind our work with Audit Protection, at no additional cost, backed by $2m in liability and E&#38;O insurance.'
                                        questionDataText='t59dc48f'
                                        answerDataText='tn1bd7ddb'
                                    />
                                    <Faq
                                        question='How long will it take to get my ERC funds?'
                                        answer='Our work will be completed within 2–4 weeks of receiving your documents. Depending on the backlog, you’ll receive your refund check from the US Treasury in 4–6 months. The longer you wait, the longer it will take!'
                                        questionDataText='t10cf3dbe'
                                        answerDataText='t75c45f79'
                                    />
                                    <Faq
                                        question='What if I&lsquo;ve been told my business doesn&lsquo;t qualify?'
                                        answer='Our team has already recovered over $1.1 billion dollars in refunds that businesses were entitled to. Many times for companies who were previously told they didn’t qualify. It won’t cost you a penny to fill out the brief pre-qualification form and see how much we can recover for you.'
                                        questionDataText='tn53717ebf'
                                        answerDataText='t7a65d70'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}