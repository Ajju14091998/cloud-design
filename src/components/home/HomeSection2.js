import React from "react";
import { motion } from "framer-motion";
import "./HomeSection2.scss";
import image1 from "../../assets/images/careimage.10adeda4.webp";
import image2 from "../../assets/images/careimagemob.e421feac.webp";

const HomeSection2 = () => {
  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <motion.section
        className="section2 care-section"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="care-section-inner" variants={itemVariants}>
          <motion.h1 className="section2-h1" variants={itemVariants}>
            Why Cloudesign -{" "}
            <span>
              The <span>CARE</span> Framework
            </span>
          </motion.h1>
          <motion.div className="section2-hbar" variants={itemVariants} />
          <motion.p className="section2-topp" variants={itemVariants}>
            Informs and guides every little action at Cloudesign and has been
            crucial in enabling stellar client satisfaction and long-lasting
            relationships.
          </motion.p>
          <motion.div className="section2-main" variants={sectionVariants}>
            <motion.div
              className="section2-main-1 d-flex"
              variants={itemVariants}
            >
              <div className="section2-main-11">
                <motion.div
                  className="section2-main-111"
                  variants={itemVariants}
                >
                  <div className="section2-main-list-h">Customer-First</div>
                  <ul className="section2-uls">
                    <li>User Interviews</li>
                    <li>Incremental Development</li>
                    <li>Sprint Feedback</li>
                    <li>Acceptance Testing</li>
                  </ul>
                </motion.div>
                <motion.div
                  className="section2-main-112"
                  variants={itemVariants}
                >
                  <div className="section2-main-list-h">Engineering</div>
                  <ul className="section2-uls">
                    <li>Design Patterns</li>
                    <li>DevSecOps Development</li>
                    <li>Test-driven Development</li>
                    <li>Automation Testing</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
            <motion.img
              className="section2-img"
              src={image1}
              alt="Framework Illustration"
              variants={imageVariants}
            />
            <motion.div
              className="section2-main-3 d-flex"
              variants={itemVariants}
            >
              <div className="section2-main-11">
                <motion.div
                  className="section2-main-113"
                  variants={itemVariants}
                >
                  <div className="section2-main-list-h">Accelerated</div>
                  <ul className="section2-uls">
                    <li>Low-code Development</li>
                    <li>Cross-platform Technologies</li>
                    <li>DevOps Engineering</li>
                    <li>Agile Methodologies</li>
                  </ul>
                </motion.div>
                <motion.div
                  className="section2-main-114"
                  variants={itemVariants}
                >
                  <div className="section2-main-list-h">Radical</div>
                  <ul className="section2-uls">
                    <li>Artificial Intelligence</li>
                    <li>Machine Learning</li>
                    <li>Robotic Process Automation</li>
                    <li>Data Analytics</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* For Responsive */}
          <motion.div className="section2-main-res" variants={sectionVariants}>
            <motion.div
              className="section2-main-1 d-flex"
              variants={itemVariants}
            >
              <div className="section2-main-11">
                <motion.div
                  className="section2-main-111"
                  variants={itemVariants}
                >
                  <div className="section2-main-list-h">Customer-First</div>
                  <ul className="section2-uls">
                    <li>User Interviews</li>
                    <li>Incremental Development</li>
                    <li>Sprint Feedback</li>
                    <li>Acceptance Testing</li>
                  </ul>
                </motion.div>
                <motion.div
                  className="section2-main-112"
                  variants={itemVariants}
                >
                  <div className="section2-main-list-h">Accelerated</div>
                  <ul className="section2-uls">
                    <li>Low-code Development</li>
                    <li>Cross-platform Technologies</li>
                    <li>DevOps Engineering</li>
                    <li>Agile Methodologies</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
            <motion.img
              className="section2-img"
              src={image2}
              alt="Responsive Framework Illustration"
              variants={imageVariants}
            />
            <motion.div
              className="section2-main-3 d-flex"
              variants={itemVariants}
            >
              <div className="section2-main-11">
                <motion.div
                  className="section2-main-113"
                  variants={itemVariants}
                >
                  <div className="section2-main-list-h">Engineering</div>
                  <ul className="section2-uls">
                    <li>Design Patterns</li>
                    <li>DevSecOps Development</li>
                    <li>Test-driven Development</li>
                    <li>Automation Testing</li>
                  </ul>
                </motion.div>
                <motion.div
                  className="section2-main-114"
                  variants={itemVariants}
                >
                  <div className="section2-main-list-h">Radical</div>
                  <ul className="section2-uls">
                    <li>Artificial Intelligence</li>
                    <li>Machine Learning</li>
                    <li>Robotic Process Automation</li>
                    <li>Data Analytics</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="section3">
        <div className="section3-main">
          <div className="section3-left">
            <div className="section3-left-1">
              <div className="div-1">500+</div>
              <div class="div-2">
                <div class="div-21">Successful Transformations</div>
                <div>
                  ROI-generating digital solutions delivered to Industry leaders
                  across 10+ sectors
                </div>
              </div>
            </div>
            <div className="section3-left-2">
              <div className="section3-left-21">
                <div className="div-1">150+</div>
                <div className="div-2">Expert Engineers</div>
                <div className="div-3">
                  Cross-functional experts across AI, ML, IoT &amp; more
                  collaborating for excellent Client experience
                </div>
              </div>
              <div className="section3-left-22">
                <div className="div-1">9+</div>
                <div className="div-2">YEARS OF EXCELLENCE</div>
                <div className="div-3">
                  Unparalleled IT execution that's forged lasting customer
                  relationships
                </div>
              </div>
            </div>
          </div>

          <div className="section3-right">
            <div className="client-logos">
              <div className="logo-grid">
                <div className="logo-grid-item">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/ClassEdge.46a1c640.svg"
                  />
                </div>
                <div className="logo-grid-item logo-grid-2nd">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/AdityaBirla.666ed927.svg"
                  />
                </div>
                <div className="logo-grid-item">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/TheHutGroup.5fd0b288.svg"
                  />
                </div>
                <div className="logo-grid-item">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/Edelweisslogo.b397bd62.svg"
                  />
                </div>
                <div className="logo-grid-item logo-grid-2nd">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/Nuvama.2649007d.svg"
                  />
                </div>
                <div className="logo-grid-item">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/Conagra.a7f4b8ac.svg"
                  />
                </div>
                <div className="logo-grid-item">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/LandT.74d48f0a.svg"
                  />
                </div>
                <div className="logo-grid-item logo-grid-2nd">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/ShareKhan.0e07a2bc.svg"
                  />
                </div>
                <div className="logo-grid-item">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/KurlOn.de3d3241.svg"
                  />
                </div>
                <div className="logo-grid-item ">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/baxter.61bba78c.webp"
                  />
                </div>
                <div className="logo-grid-item logo-grid-2nd">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/cactus.3c87a7ac.webp"
                  />
                </div>
                <div className="logo-grid-item ">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/steller.1af40cfe.webp"
                  />
                </div>
                <div className="logo-grid-item ">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/schindler.fbf9cf1d.webp"
                  />
                </div>
                <div className="logo-grid-item logo-grid-2nd    ">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/valueandvariety.ada9195b.webp"
                  />
                </div>
                <div className="logo-grid-item ">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/solugenixlogohighres.afcad343.webp"
                  />
                </div>
                <div className="logo-grid-item">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/zensar.1321cd6a.webp"
                  />
                </div>
                <div className="logo-grid-item logo-grid-2nd">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/Greenarc.ce417b18.webp"
                  />
                </div>
                <div className="logo-grid-item">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/waterEFood.191d5e33.webp"
                  />
                </div>
                <div className="logo-grid-item">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/paytmmoney.0db2c63c.webp"
                  />
                </div>
                <div className="logo-grid-item  logo-grid-2nd">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/LandTInfotech.6cfbdaad.webp"
                  />
                </div>
                <div className="logo-grid-item">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/learningmate.954fed86.webp"
                  />
                </div>
                <div className="logo-grid-item">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/credilio.8c170b87.webp"
                  />
                </div>
                <div className="logo-grid-item  logo-grid-2nd">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/idc.6f5b40fe.webp"
                  />
                </div>
                <div className="logo-grid-item ">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/ingenico.48e452ff.webp"
                  />
                </div>
                <div className="logo-grid-item">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/cognizant.4cd19caf.webp"
                  />
                </div>
                <div className="logo-grid-item logo-grid-2nd">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/iitb.5616a05f.webp"
                  />
                </div>
                <div className="logo-grid-item ">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/BharatElectronicslogo.4696572c.webp"
                  />
                </div>
                <div className="logo-grid-item">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/allcargo-logistics.1cfadedc.svg"
                  />
                </div>
                <div className="logo-grid-item logo-grid-2nd">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/axis-security.f2271f1a.svg"
                  />
                </div>
                <div className="logo-grid-item ">
                  <img
                    alt="Class edge"
                    loading="lazy"
                    src="https://www.cloudesign.com/_next/static/media/valueandvariety.ada9195b.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection2;
