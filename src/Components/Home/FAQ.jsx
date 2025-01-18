import FAQSS from "../../assets/FAQSS.png";
import { Accordion } from "./Accordian";

export const FAQ = () => {
  //Storing My FAQs in an Array
  const FAQS = [
    {
      id: 1,
      question: "Why should I apply for a job with your company?",
      answer:
        "We offer a dynamic and inclusive work environment, opportunities for career growth, and competitive benefits. Join us to be part of an innovative team where your contributions matter.",
    },
    {
      id: 2,
      question: "How do I apply for a job?",
      answer:
        "You can apply through our website by submitting your resume and cover letter. Follow the instructions on the job posting to ensure your application is complete.",
    },
    {
      id: 3,
      question: "What is the interview process like?",
      answer:
        "Our interview process typically involves an initial phone screening, followed by an in-person or virtual interview with the hiring manager. Depending on the role, you may also be asked to complete a technical assessment or task.",
    },
    {
      id: 4,
      question: "Do you offer internships or entry-level positions?",
      answer:
        "Yes, we offer internships and entry-level positions in various departments. Check our careers page for open opportunities and apply to gain hands-on experience and build your career with us.",
    },
    {
      id: 5,
      question: "What qualifications do I need for the job?",
      answer:
        "Qualifications vary by role. We typically require relevant educational background, professional experience, and specific skills related to the job description. Be sure to review the job posting for the full requirements.",
    },
    {
      id: 6,
      question: "Can I apply for multiple positions at once?",
      answer:
        "Yes, you can apply for multiple positions as long as you meet the qualifications. However, we recommend tailoring your application to each role to ensure the best fit for both you and the company.",
    },
  ];

  return (

  <div className="p-4 bg-white md:max-h-[1500px] pt-10">
  {/* Title Section */}
  <p className="text-center text-2xl font-bold mb-2">Frequently Asked</p>
  <p className="text-center text-2xl font-bold mb-3">Questions?</p>

  {/* Content Section */}
  <div className="bg-white flex flex-col md:flex-row justify-between items-start sm:flex sm:flex-col-reverse">
    {/* Image Section */}
    <div className="flex-shrink-0 self-center md:self-start">
      <img
        src={FAQSS}
        alt="FAQs"
        className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto sm:mt-10 mx-3"
      />
    </div>

    {/* FAQ Accordion Section */}
    <div className="mx-1 w-full md:w-2/3 sm:min-h-[570px] bg-white">
      <section className="p-5 rounded shadow-sm sm:mb-10">
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white dark:bg-white text-gray-900 dark:text-black"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
          className="min-h-[300px]"
        >
          {/* Generate FAQ Accordion */}
          {FAQS.map((faq) => (
            <Accordion key={faq.id} faq={faq} />
          ))}
        </div>
      </section>
    </div>
  </div>
</div>
 
  );
};
