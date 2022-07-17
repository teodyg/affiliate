import { useState } from "react"

export default function Faq({ question, answer, questionDataText, answerDataText }) {
    const [open, setOpen] = useState(false)
    let iconStyle

    if (open) {
        iconStyle = {
            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg)',
            transformStyle: 'preserve-3d'
        }
    }
    else {
        iconStyle = {
            transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
            transformStyle: "preserve-3d"
        }
    }

    return (
        <div className="faq_accordion" onClick={() => setOpen(!open)}>
            <div
                data-w-id="ab44eb72-c903-c8ac-2b90-8dc63c1d4f07"
                className="faq_question"
            >
                <div
                    className="text-size-medium text-weight-bold"
                    data-text={questionDataText}
                >
                    {question}
                </div>
                <img
                    src="/images/icon_plus.svg"
                    loading="lazy"
                    alt=""
                    className="faq_icon"
                    data-img="i2f4ef33c"
                    srcSet=""
                    style={{ ...iconStyle, transition: 'transform 100ms ease-out' }}
                />

            </div>
            <div
                style={{ width: "100%", height: !open && 0 }}
                className="faq_answer"
            >
                <div className="margin-bottom margin-small">
                    <div className="max-width-large">
                        <p data-text={answerDataText}>
                            {answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}