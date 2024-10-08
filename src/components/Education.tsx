import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>

        <div className="mt-8 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech Physcis with  Prod. Tech."
            subTitle="University of Port Harcourt (20013 - 2019)"
            result="2.65/5"
            des="University of Port Harcourt well known for its strong academic prowess."
          />

          <ResumeCard
            title="High School"
            subTitle="Lutheran High School (2006 - 2012)"
            result="SSCE"
            des="Lutheran High School is a vibrant and inclusive secondary school that is dedicated to providing an excellent educational experience for all its students."
          />

          <ResumeCard
            title="First School Certificate(FSC)"
            subTitle="Nativity Private School (2001 - 2005)"
            result="4.75/5"
            des="Nativity Private School is one of the best, and famous in Makurdi as it provides not just academics but wholistic learning."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Software Engineer"
            subTitle="Start Innovation Hub Team - (2023 - Present)"
            result="NIGERIA"
            des="Start Innovation Hub is a dynamic and forward-thinking innovation and technology incubation company dedicated to fostering entrepreneurship, driving innovation, and empowering startups to succeed in the fast-paced digital landscape. "
          />
          <ResumeCard
            title="Field Engineer"
            subTitle="Epoxy Service Limited - (2022 - 2023)"
            result="NIGERIA"
            des="EPOXY SERVICES LTD is an indigenous Limited Liability Company, incorporated under the Company and Allied Matters Acts of 1990 of the Federal Republic of Nigeria. EPOXY SERVICES LTD is involved in the business of Sand Dredging and Land Reclamation, Marine Engineering and Land Logistics, Mechanical piping/pipeline & equipment installations (onshore/offshore) & Civil Construction, Shore Protection and Piling."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Remita LTD - (2021 - 2022)"
            result="NIGERIA"
            des="Remita Ltd Group is a full service technology solutions provider."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Innovation Support Network (ISN) HUBS - (2021 - 2021)"
            result="NIGERIA"
            des="ISN Hubs is a Non-For-Profit Business Membership Organisation comprising of entrepreneurship, impact, innovation and technology hubs across the country."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
