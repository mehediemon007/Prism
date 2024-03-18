import Accordion from '../elements/Accordion'

export default function Faq() {

  const data = [
    {
      "ques": "What are the costs associated with a Prism Card?",
      "ans": "Prism Card offers various tiers, each with its own pricing and benefits. To view detailed pricing information, please visit our pricing page."
    },
    {
      "ques": "How can I obtain a metal Prism Card?",
      "ans": "Prism provides different card types based on your membership level. The basic plan includes a black plastic Prism Card. For Prism+ Members, we offer limited edition metal cards in various designs and materials. For more details, please contact our customer support."
    },
    {
      "ques": "Is the Prism Card globally accepted?",
      "ans": "Yes, the Prism Card is accepted in almost every country worldwide that accepts VISA, making it highly versatile for international use."
    },
    {
      "ques": "How do I use my cryptocurrency with Prism?",
      "ans": "The Prism platform enables you to deposit your cryptocurrency and instantly convert it into fiat currency in your account. This allows you to spend your crypto as easily as traditional money."
    },
  ]

  return (
    <div className="container">
      {
        data.length && (
          data.map((faq, i) => (
            <Accordion faq={faq} index={i}/>
          ))
        )
      }
    </div>
  )
}