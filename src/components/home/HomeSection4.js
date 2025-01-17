// import React from "react";
import { motion } from "framer-motion";
import "./HomeSection4.scss";
import React, { useEffect, useState, useRef } from "react";
const HomeSection4 = () => {
  const sectionRef = useRef(null); // Ref for observing the section
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the section is intersecting the viewport
        if (entries[0].isIntersecting) {
          setIsVisible(true); // Trigger animation
        } else {
          setIsVisible(false); // Pause or reset if needed
        }
      },
      { threshold: 0.2 } // 20% of the section should be visible to trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup observer
      }
    };
  }, []);
  return (
    <>
      <section ref={sectionRef} className="service-section">
        <div>
          {/* Section Heading */}
          <div className="service-heading-section">
            <h3>Every Digital Experience Under a Single Roof</h3>
            <div className="service-hb-section">
              <div></div>
            </div>
          </div>

          {/* Motion Animation for Cards */}
          <motion.div
            className="service-sections-main"
            initial={{ x: "-100%" }} // Start off-screen
            animate={isVisible ? { x: 0 } : {}} // Slide to the original position if visible
            transition={{ duration: 2 }} // Animation duration
          >
            {/* Service Cards */}
            <div className="service-card product-development">
              <img
                className="service-image"
                alt="digexp image"
                loading="lazy"
                src="https://www.cloudesign.com/_next/static/media/dgExImg1.4735722a.webp"
              />
              <div className="service-details">
                <div className="service-header">
                  <h2>Product Development &amp; Maintenance</h2>
                  <div className="service-links">
                    <a href="">
                      <div>Agile</div>
                    </a>
                    <a href="">
                      <div>API and Microservices</div>
                    </a>
                    <a href="">
                      <div>Legacy Modernization</div>
                    </a>
                    <a href="">
                      <div>Site Reliability Engineering</div>
                    </a>
                    <a href="">
                      <div>Quality Assurance (QA) and Testing</div>
                    </a>
                    <a href="">
                      <div>Low Code / No Code</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card emerging-technology">
              <img
                className="service-image"
                alt="digexp image"
                loading="lazy"
                width="432"
                height="239"
                src="https://www.cloudesign.com/_next/static/media/emerging.31a8ddb4.webp"
              />
              <div className="service-details">
                <div className="service-header">
                  <h2>Emerging Technology</h2>
                  <div className="service-links mt-2 hidden">
                    <a href="/services/ai-development-services/">
                      <div>AI &amp; ML Automation</div>
                    </a>
                    <a href="/coming-soon/">
                      <div>Blockchain</div>
                    </a>
                    <a href="/coming-soon/">
                      <div>Web 3.0</div>
                    </a>
                    <a href="/services/iot-development-company/">
                      <div>IoT Platform Engineering</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card digital-services">
              <img
                className="service-image"
                alt="digexp image"
                loading="lazy"
                width="401"
                height="239"
                src="https://www.cloudesign.com/_next/static/media/digital.e5c42ab2.webp"
              />
              <div className="service-details">
                <div className="service-header">
                  <h2>Digital</h2>
                  <div className="service-links mt-2 hidden">
                    <a href="/services/ui-ux-design-services/">
                      <div>UI &amp; UX Experience</div>
                    </a>
                    <a href="/services/data-analytics-services/">
                      <div>Data &amp; Analytics</div>
                    </a>
                    <a href="/coming-soon/">
                      <div>Intelligent Document Processing</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card digital-marketing">
              <img
                className="service-image"
                alt="digexp image"
                loading="lazy"
                width="397"
                height="239"
                src="https://www.cloudesign.com/_next/static/media/digimarket.4823092b.webp"
              />
              <div className="service-details">
                <div className="service-header">
                  <h2>Digital Marketing</h2>
                  <div className="service-links mt-2 hidden">
                    <a href="/coming-soon/">
                      <div>SEO &amp; SEM</div>
                    </a>
                    <a href="/services/content-writing-Services/">
                      <div>Content &amp; Copy Writing</div>
                    </a>
                    <a href="/services/web-development-service/">
                      <div>Website Development</div>
                    </a>
                    <a href="/services/native-and-hybrid-app-development/">
                      <div>Mobile App Development</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card enterprise-software">
              <img
                className="service-image"
                alt="digexp image"
                loading="lazy"
                width="432"
                height="239"
                src="https://www.cloudesign.com/_next/static/media/enterprise.9d93fd37.webp"
              />
              <div className="service-details">
                <div className="service-header">
                  <h2>Enterprise Software</h2>
                  <div className="service-links mt-2 hidden">
                    <a href="/services/robotic-process-automation/">
                      <div>UiPath</div>
                    </a>
                    <a href="/services/power-apps-development/">
                      <div>Power Apps</div>
                    </a>
                    <a href="/services/powerbi-services/">
                      <div>Power BI</div>
                    </a>
                    <a href="/coming-soon/">
                      <div>ERP</div>
                    </a>
                    <a href="/coming-soon/">
                      <div>Digital Content Management</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card cloud-devops">
              <img
                className="service-image"
                alt="digexp image"
                loading="lazy"
                width="401"
                height="239"
                src="https://www.cloudesign.com/_next/static/media/cloudDevops.7349035e.webp"
              />
              <div className="service-details">
                <div className="service-header">
                  <h2>Cloud &amp; DevOps</h2>
                  <div className="service-links mt-2 hidden">
                    <a href="/services/cloud-devops-services/">
                      <div>DevOps &amp; Security</div>
                    </a>
                    <a href="/coming-soon/">
                      <div>AWS / Azure Consultancy</div>
                    </a>
                    <a href="/coming-soon/">
                      <div>Cloud Migration</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="partner-section">
        <div className="partner-header">
          <h3>Our Partner Ecosystem</h3>
          <div className="partner-line">
            {" "}
            <div></div>
          </div>
        </div>
        <div className="partner-logos">
          <div className="partner-logo">
            <img
              alt="our partners"
              loading="lazy"
              src="https://www.cloudesign.com/_next/static/media/AWSImg.5bedfdef.svg"
            />
          </div>
          <div className="partner-logo">
            <img
              alt="our partners"
              loading="lazy"
              src="https://www.cloudesign.com/_next/static/media/UiPath.208df059.svg"
            />
          </div>
          <div className="partner-logo">
            <img
              alt="our partners"
              loading="lazy"
              src="https://www.cloudesign.com/_next/static/media/PowerApps.1cb6cc57.svg"
            />
          </div>
          <div className="partner-logo">
            <img
              alt="our partners"
              loading="lazy"
              src="https://www.cloudesign.com/_next/static/media/MicrosoftAzure.0b4e6096.svg"
            />
          </div>
        </div>
      </section>

      <section>
        <section className="tech-stack-section">
          <div className="tech-stack-main">
            <h3 className="tech-stack-heading">
              An Exhaustive Tech Stack for Every Digital Need
            </h3>
            <div className="tech-stack-container">
              {[
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-Druidlogo.png",
                  alt: "Druid",
                  label: "Druid",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techStack-Javalogo.png",
                  alt: "Java",
                  label: "Java",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-Angular.jpg",
                  alt: "Angular",
                  label: "Angular",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-phplogo.svg",
                  alt: "PHP",
                  label: "PHP",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-NodeJslogo.png",
                  alt: "NodeJs",
                  label: "NodeJs",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-SpringBootlogo.jpg",
                  alt: "Spring Boot",
                  label: "Spring Boot",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-Reactlogo.jpg",
                  alt: "React Native",
                  label: "React Native",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-NestJslogo.jpg",
                  alt: "NestJs",
                  label: "NestJs",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-Wordpresslogo.jpg",
                  alt: "Wordpress",
                  label: "Wordpress",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-Tensorlogo.jpg",
                  alt: "TensorFlow",
                  label: "TensorFlow",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-UiPathlogo.jpg",
                  alt: "UiPath",
                  label: "UiPath",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-Dockerlogo.jpg",
                  alt: "Docker",
                  label: "Docker",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-jiralogo.webp",
                  alt: "JIRA",
                  label: "JIRA",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-Powerappslogo.jpg",
                  alt: "Powerapps",
                  label: "Powerapps",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-flutterlogo.webp",
                  alt: "Flutter",
                  label: "Flutter",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-AspNETCorelogo.jpg",
                  alt: "Asp .NET Core",
                  label: "Asp .NET Core",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-fullawslogo.webp",
                  alt: "AWS",
                  label: "AWS",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-ASPNetMVClogo.jpg",
                  alt: "ASP .Net MVC",
                  label: "ASP .Net MVC",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-Laravellogo.jpg",
                  alt: "Laravel",
                  label: "Laravel",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-pythonlogo.webp",
                  alt: "Python",
                  label: "Python",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-mysqllogo.svg",
                  alt: "MySQL",
                  label: "MySQL",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-woocommercelogo.svg",
                  alt: "WooCommerce",
                  label: "WooCommerce",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-microsoftdynamic365logo.svg",
                  alt: "Microsoft Dynamic 365",
                  label: "Microsoft Dynamic 365",
                },
                {
                  href: " ",
                  imgSrc:
                    "https://www.cloudesign.com/images/techstack-vue-jslogo.svg",
                  alt: "Vue.js",
                  label: "Vue.js",
                },
              ].map((tech, index) => (
                <a key={index} href={tech.href} className="tech-link">
                  <div className="tech-item">
                    <img
                      src={tech.imgSrc}
                      alt={tech.alt}
                      className="tech-logo"
                    />
                    <div className="tech-label">{tech.label}</div>
                  </div>
                </a>
              ))}
            </div>
            <a href="/technology/" className="explore-link">
              Explore All Technologies
            </a>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomeSection4;
