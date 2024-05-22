import { Card } from "./ui/card";

const terms = [
    "These terms and conditions govern your use of justreadinside (“justreadinside”), which is operated by “justreadinside”. By using the Website, you agree to be bound by these terms and conditions.",
    {
        key: "Content",
        value: [
            "The articles, news, and other content displayed on the Website have been generated automatically using proprietary data processing algorithms. We make no warranties or guarantees regarding the accuracy, completeness, or timeliness of the content on the Website.",
            "You may use the content on the Website for personal, non-commercial purposes only. You may not reproduce, distribute, modify, or otherwise use the content for any commercial purpose without our prior written consent.",
        ],
    },
    {
        key: "Intellectual Property",
        value: "The Website and its content are protected by intellectual property laws, including copyright and trademark laws. You may not use any content or marks displayed on the Website without our prior written consent.",
    },
    {
        key: "User Conduct",
        value: "You may not use the Website for any unlawful purposes. You may not attempt to gain unauthorized access to the Website, disrupt the Website’s operation, or engage in any behavior that may harm or interfere with the Website or its users.",
    },
    {
        key: "Privacy",
        value: [
            <>
                We take your privacy seriously. Our{' '}
                <a href="https://www.justreadinside.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#1968fe] font-medium cursor-pointer">Privacy Policy</a>{' '}
                explains how we collect, use, and protect your personal information.
            </>
        ],
    },
    {
        key: "Limitation of Liability",
        value: "In no event shall we be liable for any damages, including without limitation direct, indirect, incidental, or consequential damages, arising out of or in connection with your use of the Website.",
    },
    {
        key: "Dispute Resolution",
        value: "Any disputes arising out of or related to your use of the Website shall be resolved through arbitration in accordance with the rules of the American Arbitration Association.",
    },
    {
        key: "Changes to These Terms and Conditions",
        value: "We may update these terms and conditions from time to time. By continuing to use the Website after any such updates, you agree to be bound by the updated terms and conditions.",
    },
    {
        key: "Governing Law",
        value: [
            "These terms and conditions shall be governed by and construed in accordance with the laws of the State of Gujarat, without regard to its conflict of laws principles.",
            "If you have any questions or concerns about these terms and conditions, please contact us",
            <span className="flex gap-[10px]" key={"email"}>email:
                <a key="email-link" className="text-[#1968fe] font-medium" href="mailto:contact@justreadinside.com">contact@justreadinside.com</a>
            </span>
        ],
    },
];

export default function TermsConditions() {
    return (
        <Card className="flex flex-col h-full p-[20px] dark:bg-[#202028] dark:text-[#cecdcd]">
            <h1 className="flex justify-center text-[24px] font-bold p-[20px]">
                Terms & Conditions
            </h1>
            <div className="flex flex-col">
                {terms?.map((item, index) => (
                    <div key={`terms-data-${index}`} className="py-[15px]">
                        {typeof item === 'string' ? (
                            <p className="text-[16px]">{item}</p>
                        ) : (
                            <>
                                <p className="font-bold text-[18px]">{item.key}</p>
                                <ul>
                                    {typeof (item.value) === 'string' ? (
                                        <p className="text-[16px] p-[5px]">
                                            {item.value}
                                        </p>
                                    ) : (
                                        item.value.map((ele, i) => (
                                            <li key={`${item?.key}-value-${i}`} className="text-[16px] p-[5px]">
                                                {ele}
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </Card>
    );
}
