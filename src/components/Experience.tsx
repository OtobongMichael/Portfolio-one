import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jr. Front End Developerr"
            subTitle=" - (2017 - Present)"
            result="PORT HARCOURT"
            des="ISN Hubs is a Non-For-Profit Business Membership Organisation comprising of
           entrepreneurship, impact, innovation and technology hubs across the country.."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Hub10 - (2020 - 2011)"
            result="Oman"
            des="HUB10 is a smart coworking office that offers different categories of affordable working space to suit your working needs."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Field Engineer"
            subTitle="Epoxy service Limited  (2015 - 2018)"
            result="PORT HARCOURT"
            des="EPOXY SERVICES LTD is an indigenous Limited Liability Company, incorporated
            under the Company and Allied Matters Acts of 1990 of the Federal Republic of
            Nigeria. EPOXY SERVICES LTD is involved in the business of Sand Dredging and
            Land Reclamation, Marine Engineering and Land Logistics, Mechanical
            piping/pipeline & equipment installations (onshore/offshore) & Civil Construction,
            Shore Protection and Piling."
          />
          <ResumeCard
            title="Marine Engineer"
            subTitle="Harbour Masters Limited  (2016 - 2017)"
            result="PORT HARCOURT"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Medical Clinic (Nysc)"
            subTitle="Fedral College of Agriculture (2001 - 2010)"
            result="EBONYI STATE"
            des="The College provides health care services to staff and students at the Medical Centre which is situated on the Campus. The Centre operates a 24-hour service for both students and staff from Monday to Sunday and public holidays inclusive. Minor cases of sickness are treated at the Centre while serious ones are normally referred to state hospital at the expense of the student’s sponsor."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
