import port1 from '../img/portImages/souvenir.JPG';
import port2 from '../img/portImages/port1.jpg';
import port3 from '../img/portImages/port2.jpg';
import task from '../img/portImages/port3.jpg';
import port4 from '../img/portImages/port4.jpg';
import port6 from '../img/portImages/port5.jpg';
import port7 from '../img/portImages/port6.jpg';
import iot from  '../img/portImages/iot.jpg';
import automation from  '../img/portImages/automation.jpg';
import automation2 from  '../img/portImages/automation2.jpg';

const portfolios = [
    {
        id: 1,
        category: 'MERN',
        link1: 'https://github.com/fahimdipto/souvenir-memoir',
        link2: 'https://souvenir-memoirs.netlify.app/',
        icon1: 'G',
        icon2: 'L',
        image: port1,
        title: 'Souvenirs',
        description:"An website where you can share your precious memory with others"
    },
    {
        id: 2,
        category: 'MERN',
        link1: 'https://github.com/fahimdipto/ice-breaking',
        link2: 'https://ice-breaking.netlify.app/',
        icon1: 'G',
        icon2: 'L',
        image: port2,
        title: 'Ice Breaking',
        description:"A dummy dating site, Where you can swap the person you like."
    },
    {
        id: 3,
        category: 'MERN',
        link1: 'https://github.com/fahimdipto/restaurant-reviews',
        icon1: 'G',
        image: port3,
        title: 'Restaurant Reviews',
        description: 'A dummy site where user can login and check and add reviews, You can search the restaurant based on there name , ZipCode and etc.'
    },
    {
        id: 4,
        category: 'MERN',
        link1: 'https://github.com/fahimdipto/Task-Tracker',

        icon1: 'G',

        image: task,
        title: 'Task Tracker',
        description: 'A simple website where you can keep track of task assigned to different Individual.'
    },
    {
        id: 5,
        category: 'Android Development',
        link1: 'https://github.com/fahimdipto/PrayerTimeNotification',
        icon1: 'G',
        image: port6,
        title: 'Prayer Time Notification',
        description: 'This is an academic Project. it is an Android Application that provides user prayer time. it also has features like view maps and set alarm.'
    },
    {
        id: 6,
        category: 'Django',
        link1: 'https://github.com/fahimdipto/personal_portfolio',
        icon1: 'G',
        icon2: 'Y',
        image: port7,
        title: 'Personal Portfolio',
        description: 'A preliminary personal portfolio developed with django'
    },
    {
        id: 7,
        category: 'IOT',
        link1: 'https://github.com/fahimdipto/Accident-Prevention-Model',
        icon1: 'G',

        image: iot,
        title: 'Accident Prevention Model',
        description: 'This project was developed using image processing, machine learning and raspberrypi. As the name suggest we build a system that can detect danger and warn the driver \n' +
            'about the imminent threat.'

    },
    {
        id: 8,
        category: 'Machine Learning',
        link1: 'https://github.com/fahimdipto/Reinforcement-learning-applied-to-finance',
        icon1: 'G',

        image: port4,
        title: 'Reinforcement learning applied to finance',
        description: 'This is my thesis project, Here by utilizing reinforcement learning we developed a system which can trade automatically in stock trade market and make profit.'

    },
    {
        id: 9,
        category: 'IOT',
        link1: 'https://github.com/fahimdipto/Reinforcement-learning-applied-to-finance',
        icon1: 'G',

        image: iot,
        title: 'Weather Station',
        description: 'A system that can predict the weather condition such as wheather is gonna rain in the upcoming few days, How the soil is, how humid the condition is.'

    },
    {
        id: 10,
        category: 'Automation',
        link1: 'https://github.com/fahimdipto/Test-Tracker-Automation',
        icon1: 'G',

        image: automation2,
        title: 'Task Tracker Automation',
        description: 'An automation testing script developed SuperTest,chai library and Mocha,mochawesome framework.'

    },
    {
        id: 11,
        category: 'Automation',
        link1: 'https://github.com/fahimdipto/souvenir-memoir-ui-automation',
        icon1: 'G',

        image: automation,
        title: 'Ui Automation',
        description: 'This Automation was developed using cypress, Here I tested different functionality of an website I created.'

    }
]

export default portfolios;