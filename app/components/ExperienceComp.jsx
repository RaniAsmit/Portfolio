"use client";
import ExpandableCards from "./ui/ExpandableCardStandard";

export const ExperienceComp = () => {

    return (
        <ExpandableCards cards={ExpCards}/>
    );
}

const ExpCards = [
//   {
//     description: "Product Engineer Intern",
//     title: "Rapipay Fintech Pvt. Ltd.",
//     src: "/Rapi.jpeg",
//     ctaText: "visit",
//     ctaLink: "https://in.rapipay.com=",
//     duration:"August 2024 - Present",
//     content: (
//     <ul className="list-disc pl-5 space-y-2 text-left">
//         <li><strong>Loan Debit System:</strong></li>
//         <li>Designed and implemented a Loan Debit System using Spring Boot...</li>
//         <li>Utilized MySQL stored procedures...</li>
//         <li>Developed RESTful APIs...</li>
//         <li><strong>Fino Payment Bank API Integration:</strong></li>
//         <li>Successfully integrated Fino Payment Bank APIs...</li>
//         <li>Implemented MySQL stored procedures and used AES-256 encryption...</li>
//         <li>Developed interface layer between RapiPay and Fino...</li>
//         <p>
//         <strong>Technologies:</strong> Java, Spring Boot, MySQL, RabbitMQ, Redis, Docker, GitHub Actions CI/CD.
//         </p>
//     </ul>
// )
//   },
  {
    description: "Memeber",
    title: "Uddeshhya NGO",
    src: "uddeshhya.jpg",
    ctaText: "visit",
    ctaLink: "https://uddeshhya.in/",
    duration:"Feb 2022 – July 2024",
    content:(
        <ul className="list-disc pl-5 space-y-2 text-left">
            <li>Taught Mathematics, English, and Science to 80+ students aged 8–15 from underprivileged backgrounds.</li>
            <li>Created customized lesson plans to improve engagement and academic performance.</li>
            <li>Provided mentorship and guidance to students aged 8-15 from diverse backgrounds, supporting academic and personal
                growth.</li>
            <li>Managed logistical aspects of educational programs at UDDESHHYA, overseeing scheduling for 20+ sessions, optimizing
                resource allocation to meet budgetary constraints</li>

            <li>Organized and led community outreach initiatives, including workshops and seminars, to raise awareness about educational
                opportunities for underprivileged children.</li>
            <p>





            {/* <strong>Technologies:</strong> HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB. */}

                </p>
        </ul>
      )
  },
];