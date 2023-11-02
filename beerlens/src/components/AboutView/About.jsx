import React from 'react';
import './About.css';
import profileImage from '../../assets/images/profile_image.jpeg';
import { IoIosMail } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';
import Frida from '../../assets/images/Frida.jpeg';
import Hanna from '../../assets/images/Hanna.jpg';
import Mervan from '../../assets/images/1633780464064.jpeg';

const About = () => {
  const teamMembers = [
    {
      name: 'Frida Jansson',
      mail: 'mailto:frija@kth.se',
      linkedin: 'https://www.linkedin.com/in/frida-jansson-8221671a2/',
      role: (
        <p>
          Frida, together with Hanna, had the main responsibility for the UX and
          UI of the prototype and the website. Her work consisted of gathering
          information about the user group, conducting user tests and creating
          the Figma prototype. For the final website prototype, she was focusing
          on the front-end part.
        </p>
      ),
      image: Frida,
    },
    {
      name: 'Mervan Kaya',
      mail: 'mailto:mckaya@kth.se',
      linkedin: 'https://www.linkedin.com/in/mervankaya/',
      role: (
        <p>
          My primary contributions were in three parts. The first part was the implementation 
          of the back-end and parts of the front-end of the website. Secondly, I conducted the
          Vivino case study which acted as a backbone for the business model for the project.
          Thirdly, together with Filip, researched, designed and implemented the recommendation engine
          for the website, and documented the machine learning related parts in the report.
        </p>
      ),
      image: Mervan,
    },
    {
      name: 'Alfred Knowles',
      mail: 'mailto:hannasn@kth.se',
      linkedin: null,
      role: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate.
        </p>
      ),
      image: profileImage,
    },
    {
      name: 'Filip Mattsson',
      mail: 'mailto:fim@kth.se',
      linkedin: 'https://www.linkedin.com/in/fim/',
      role: (
        <p>
          My primary contribution was in the design and implementation of the recommendation engine, ensuring that users receive tailored beer suggestions based on their preferences and past interactions. 
          This involved intricate data analysis, algorithm development, and continuous optimization to enhance user experience and satisfaction. 
          Additionally, I helped shape the business model, strategizing on how to monetize the platform while ensuring user retention.
          My efforts was concentrated around bridging the gap between technology and business to create a holistic and user-centric platform.
        </p>
      ),
      image: profileImage,
    },
    {
      name: 'Hanna Snarberg',
      mail: 'mailto:hannasn@kth.se',
      linkedin: 'https://www.linkedin.com/in/hanna-snarberg/',
      role: (
        <p>
          Hanna was, together with Frida, mainly responsible for the UX of the
          website. Her work included researching the user group, user testing,
          and, from the result of these activities, iterativly create Figma
          proptypes of the website. She was also part of developing the final
          website, on the front-end side.
        </p>
      ),
      image: Hanna,
    },
  ];
  return (
    <div className='aboutContainer'>
      <h1 className='aboutTitle'> About Beer Lens</h1>
      <div className='aboutTeamTitle'>
        <p className='aboutText'>
          Beer Lens is a business dedicated to serving the growing craft beer
          community in Europe. We've noticed the rising popularity of craft beer
          in Europe, which is now even surpassing the demand for wine. People
          are increasingly intrigued by the diverse flavors, origins, and
          brewing methods of these unique brews. In 2023, the European beer
          market reached an impressive value of $270.33 billion, making it one
          of the largest beverage markets in the region.
          <br></br> <br></br>However, we've identified a gap in the market.
          While platforms like Untappd are good at organizing beer reviews and
          fostering a community of beer lovers, they don't enable direct beer
          purchases. Beer Lens aims to bridge this gap by creating an online
          marketplace exclusively designed for craft beer enthusiasts in Europe,
          with a strong focus on helping users discover and curate their beer
          choices. <br></br> <br></br>At Beer Lens, we employ cutting-edge
          technologies like NVIDIA Merlin's Deep-Learning Recommendation Model
          to offer personalized beer recommendations to our users. We also take
          into account legal regulations and supply chain intricacies, all while
          maintaining a strong commitment to sustainability and an exceptional
          user experience. <br></br> <br></br>Our journey in developing Beer
          Lens has been user-centric, following an agile approach. Extensive
          market and technology analysis, as well as user research in the form
          of interviews, surveys and user testing, have influenced the content
          and design of our final application. Through this journey, Beer Lens
          aspires to become the top choice for craft beer enthusiasts.
        </p>
      </div>
      <h1 className='aboutTitle'> The Team </h1>
      <div className='team'>
        {teamMembers.map((member, index) => (
          <span key={index} className='teamMember'>
            <img
              src={member.image}
              alt={member.name}
              className='teamMemberImage'
            />
            <h3 className='teamMemberName'>{member.name}</h3>
            <span className='icons'>
              {member.mail && (
                <a href={member.mail} target='_blank' rel='noreferrer'>
                  <IoIosMail className='iconMail'> </IoIosMail>
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target='_blank' rel='noreferrer'>
                  <BsLinkedin className='iconLinkedin'> </BsLinkedin>
                </a>
              )}
            </span>
            <h4 className='teamMemberText'>{member.role}</h4>
          </span>
        ))}
      </div>
    </div>
  );
};

export default About;
