import { SelectedPage } from "@/shared/types";
import { BenefitType } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import EachBenefits from "./EachBenefits";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";
import Htext from "@/shared/Htext";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

type Props = { setSelectedPage: (value: SelectedPage) => void };

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <motion.section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-28 overflow-x-hidden"
      onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
      {/* Heading */}
      <motion.div
        className="md:my-5 md:w-3/5 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Htext>MORE THAN JUST GYM.</Htext>
        <p className="my-5 text-sm">
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </p>
      </motion.div>
      {/* Benefits */}
      <motion.div
        className="md:flex benefits-center justify-between mt-5  gap-8"
        variants={container}
      >
        {benefits.map((benefit: BenefitType) => (
          <EachBenefits
            key={benefit.title}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </motion.div>

      {/* Benefits Highlight Section */}
      <div className="mt-16 md:mt-28 md:flex items-center justify-center">
        {/* image */}
        <img src={BenefitsPageGraphic} alt="" />
        {/* description */}
        <div className="text-lg">
          <div className="relative">
            <motion.div className="before:absolute before:-top-20 before:-left-20 before:z[-1] before:content-abstractwaves">
              <motion.div
                className="ml-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, scale: 1.1 },
                }}
              >
                <Htext>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </Htext>
              </motion.div>
            </motion.div>
          </div>
          {/* Descriptions */}
          <div>
            <p className="my-5">
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla
              nec. Consequat sed facilisis dui sit egestas ultrices tellus.
              Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci
              diam odio.
            </p>
            <p className="mb-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
          <div className="mt-14">
            <div className="relative text-sm">
              <div className="before:absolute before:right-5 before:z[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Benefits;
