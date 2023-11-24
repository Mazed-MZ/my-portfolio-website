import React, { useState, useEffect } from 'react';
import { Headline, TopLine } from '../About/AboutStyle';
import { SkillSection, SkillContainer, SkillInfo, SkillHeader, SkillIcon, SkillArrow, SkillTitle, SkillSubTitle, SkillTag, SkillName, SkillNumber, SkillBar, SkillParcent, SkillHTML, SkillCSS, SkillJava, SkillReact, Skillphp, SkillNode, Skillfirebase, Skillpython, Skillfigma, SkillSketch, SkillPhotoshop } from './SkillStyle';
import './Skill.css';
import Aos from "aos";
import 'aos/dist/aos.css';



const data = [
    {
        skillTitle: '</> Frontend Developer',
        Skill_1: 'HTML',
        Skill_1_img: 'https://i.ibb.co/tJs3Zt6/80-803527-html5-css3-and-javascript-logos-html5-logo-png-removebg-preview.png',    
        Skill_2: 'JavaScript',
        Skill_2_img: 'https://i.ibb.co/SQ1r6D5/javascript-39395.png',
        Skill_3: 'CSS',
        Skill_3_img: 'https://i.ibb.co/8DvKdTJ/Untitled-2.png',
        Skill_4: 'React',
        Skill_4_img: 'https://i.ibb.co/Y3g410p/2507930-middle-removebg-preview.png',
        Skill_info: 'Highly experienced more than 4 years. Most of the cases I use HTML5, CSS3. JavaScript One of my favourite programming language. Most comfortable with using JavaScript modified version ES6, TypeScript. More than 2 years of experience using JavaScript. As a react developer I am using React most of the projects. I have done already 20 projects using React. 2 years of experience',
    },
    {
        skillTitle: '{ } Backend Developer',
        Skill_1: 'PHP',
        Skill_1_img: 'https://i.ibb.co/CBS6b96/kisspng-web-development-php-logo-mobile-app-development-5b00d871d389f6-2380719115267820658665-remove.png',
        Skill_2: 'Node Js',
        Skill_2_img: 'https://i.ibb.co/NS1PwS6/456-4564693-vector-javascript-node-js-transparent-png-clipart-node-removebg-preview.png',
        Skill_3: 'Mongo DB',
        Skill_3_img: 'https://i.ibb.co/jvNjpZ8/9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3-removebg-preview.png',
        Skill_4: 'Firebase',
        Skill_4_img: 'https://i.ibb.co/g9JTwVB/imgbin-firebase-cloud-messaging-computer-icons-google-cloud-messaging-angularjs-github-yellow-folder.png',
        Skill_info: 'More than 2 years of experience. All kind of npm packages are using in my every project. 3 years of experience using Node Js. My Frontend and backend both type of projects are using Node Js. Most of my fullstack projects backend database by using Mongo DB. I am apply CRUD operation maximum cases. Collect user data securely. 2 years of experience using Mongo DB. All of my projects for collect user data and secure backend database and also ensure user authentication I am using firebase most likely. 2 year of experience using Firebase.',
    },
    {
        skillTitle: '|) Designer',
        Skill_1: 'Figma',
        Skill_1_img: 'https://i.ibb.co/WWhhJ49/Screen-Shot-2018-11-19-at-8-43-27-PM-removebg-preview.png',
        Skill_2: 'Photoshop',
        Skill_2_img: 'https://i.ibb.co/dph4Wvg/Logo-adobe-photoshop-express-PNG-removebg-preview.png',
        Skill_3: 'Bootstrap',
        Skill_3_img: 'https://i.ibb.co/xHYTKT7/Untitled-210.png',
        Skill_4: 'Material UI',
        Skill_4_img: 'https://i.ibb.co/M6PWr8h/577-5779757-react-material-ui-logo-hd-png-download-removebg-preview.png',
        Skill_info: 'All of svg images, color code selection I am using Figma. All kind of advance using and design template are made by photoshop and figma in my maximum projects. 50% of the cases I am using Material Ui, parallax, animation etc.',
    }
];

const Skill = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <>
            <SkillSection id='skill'>
                <div className='skillHead' data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="500">
                    <TopLine>Skill</TopLine>
                    <h1>My Technical skills</h1>
                </div>
                <SkillContainer>
                    <div className='accordion'>
                        {data.map((item, i) => (
                            <div className='item' data-aos="zoom-in">
                                <div className='title' onClick={() => toggle(i)}>
                                    <h2>{item.skillTitle}</h2>
                                    <h3>{selected == i ? <i class="uil uil-angle-up"></i> : <i class="uil uil-angle-down"></i>}</h3>
                                </div>
                                <div className={selected == i ? 'content show' : 'content'}>
                                    <div className='skill_info'>
                                        <div className='skill_div'>
                                            <div className='skill_logo'>
                                                <img src={item.Skill_1_img} alt="logo" />
                                                <h3>{item.Skill_1}</h3>
                                            </div>
                                            <div className='skill_logo'>
                                                <img src={item.Skill_2_img} alt="logo" />
                                                <h3>{item.Skill_2}</h3>
                                            </div>
                                        </div>
                                        <div className='skill_div'>
                                            <div className='skill_logo'>
                                                <img src={item.Skill_3_img} alt="logo" />
                                                <h3>{item.Skill_3}</h3>
                                            </div>
                                            <div className='skill_logo'>
                                                <img src={item.Skill_4_img} alt="logo" />
                                                <h3>{item.Skill_4}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='skill_txt'>
                                        <p>{item.Skill_info}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SkillContainer>
            </SkillSection>
        </>
    );
};

export default Skill;