import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { VscDebugAll } from "react-icons/vsc";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Business Stratagy"
            des="Identifying unique strengths and capabilities that can differentiate 
            the business from competitors."
            icon={null}
          />
          <Card
            title="Web Development"
            des=" Ensure your website looks good and functions well on all devices
            (desktops, tablets, and mobile phones)."
            icon={<AiFillAppstore />}
          />
          <Card
            title="SEO Optimisation"
            des="Link to other pages on your website to improve navigation and help
             search engines understand the structure of your site."
            icon={<SiProgress />}
          />
          <Card
            title="Debugging Applications"
            des=" Use version control systems (like Git) to manage changes and keep
             track of different versions of your code.."
            icon={<VscDebugAll />}
          />
          <Card
            title="UX Design"
            des=" Organizing and structuring information in a way that is understandable
             and accessible to users."
            icon={<SiAntdesign />}
          />
          <Card
            title="Hosting Websites"
            des=" Use monitoring tools (e.g., UptimeRobot, Pingdom) to track website 
            uptime and performance."
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
