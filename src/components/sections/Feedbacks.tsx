import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { TTestimonial } from "../../types";

// Import EarthCanvas from the canvas folder
import { EarthCanvas } from "../canvas";

// Import social media icons from assets folder
import GithubIcon from "../../assets/github.png";
import GmailIcon from "../../assets/gmail.png";
import LinkedinIcon from "../../assets/linkedin.png";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/instagram.png";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="w-full p-5"
  >
    <div className="text-center">
      <p className="text-[18px] text-white tracking-wider">{testimonial}</p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-5 mt-5">
        <a href="https://github.com/solendav" target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} alt="GitHub" className="w-8 h-8 hover:opacity-80" />
        </a>
        <a href="mailto:solomondawit807@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={GmailIcon} alt="Gmail" className="w-8 h-8 hover:opacity-80" />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <img src={LinkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:opacity-80" />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <img src={TwitterIcon} alt="Twitter" className="w-8 h-8 hover:opacity-80" />
        </a>
        <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" className="w-8 h-8 hover:opacity-80" />
        </a>
      </div>
    </div>
  </motion.div>
);

const Footer = () => {
  return (
    <footer className="bg-black-100 rounded-t-[20px] py-8 w-full">
      <div className="flex justify-center items-center">
        <FeedbackCard index={0} {...testimonials[0]} />
      </div>
      {/* Add EarthCanvas to the footer */}
      <div className="flex justify-center mt-8">
        <div className="h-[250px] md:h-[350px] xl:h-auto xl:flex-1">
          <EarthCanvas />
        </div>
      </div>
      <div className="text-center text-white mt-5">
        <p>© 2024 Solen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
