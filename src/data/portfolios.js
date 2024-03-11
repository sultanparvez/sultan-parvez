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
import selenium from '../img/portImages/Selenium.PNG'
import Cypress from '../img/portImages/Cypress.PNG'
import Cucumber from '../img/portImages/cucumber.PNG'
import Robot from '../img/portImages/Robot.PNG'

const portfolios = [
    {
        id: 1,
        category: 'Automation',
        link1: 'https://github.com/sultanparvez/UI-Automation-Cypress',
        icon1: 'G',
        image: Cypress,
        title: 'UI Automation - Cypress',
        description: 'Automation scripts for UI Test Automation utilizing cypress. Agenda: ' +
            ' Navigating a to a e-commerce site.' +
            ' Login to the website. '+
            ' Select few products. '+
            ' Remove a a selected product. '+
            ' Proceed to checkout. '+
            ' Fill up the shipping details. '+
            ' Proceed to continue. '+
            ' Finish the checkout process. '+
            ' Asserting various elements and values in every steps mentioned above.'

    },
    {
        id: 2,
        category: 'Automation',
        link1: 'https://github.com/sultanparvez/UI-Automation-Selenium',
        icon1: 'G',

        image: selenium,
        title: 'UI Automation - Selenium',
        description: 'Automation scripts for UI test automation using java and selenium web-driver. Agenda: ' +
            ' Navigating a to a e-commerce site.' +
            ' Login to the website. ' +
            ' Select few products.  '+
            ' Remove a a selected product. ' +
            ' Proceed to checkout. ' +
            ' Fill up the shipping details. '+
            ' Proceed to continue. '+
            ' Finish the checkout process. ' +
            ' Asserting various elements and values in every steps mentioned above.'
    },
    {
        id: 3,
        category: 'Automation',
        link1: 'https://github.com/sultanparvez/UI-Automation-Cypress-Advanced',
        icon1: 'G',

        image: Cucumber,
        title: 'UI Automation - Cucmber Framework',
        description: 'Automation scripts for UI test automation using cypress and cucmber framework. Agenda: ' +
            ' Navigating a to a e-commerce site.' +
            ' Validating some generic scenario. ' +
            ' Select few products.  '+
            ' Proceed to checkout. ' +
            ' Validating seleted product price totals with total price '+
            ' Proceed to continue. '+
            ' Validating success message. ' 
    },
    {
        id: 4,
        category: 'Automation',
        link1: 'https://github.com/sultanparvez/UI-Automation-Selenium-Python',
        icon1: 'G',

        image: automation,
        title: 'UI Automation - Selenium Python',
        description: 'Automation scripts for UI test automation using selenium,python,unnittest,HtmlTestRunner. Agenda: ' +
            'Login in to an website and assert successful login.' 
    },
    {
        id: 5,
        category: 'MERN',
        link1: 'https://github.com/sultanparvez/souvenir-memoir',
        // link2: 'https://souvenir-memoirs.netlify.app/',
        icon1: 'G',
        icon2: 'L',
        image: port1,
        title: 'Souvenirs',
        description:"An website where you can share your precious memory with others."
    },
    {
        id: 6,
        category: 'React',
        link1: 'https://github.com/sultanparvez/ice-breaking',
        // link2: 'https://ice-breaking.netlify.app/',
        icon1: 'G',
        icon2: 'L',
        image: port2,
        title: 'Ice Breaking',
        description:"A replica of popular matchmaking sites, Users can swap on others profile if they find someone with similar interests and get connected to each others."
    },
    {
        id: 16,
        category: 'MERN',
        link1: 'https://github.com/sultanparvez/restaurant-reviews',
        icon1: 'G',
        image: port3,
        title: 'Restaurant Reviews',
        description: 'A restaurant erp system where user can login and check and add reviews, You can search the restaurant based on there name , ZipCode and etc.'
    },
    {
        id: 17,
        category: 'MERN',
        link1: 'https://github.com/sultanparvez/Task-Tracker',
        icon1: 'G',
        image: task,
        title: 'Task Tracker',
        description: 'A simple website where you can keep track of task assigned to different Individual.'
    },
    {
        id: 7,
        category: 'Android Development',
        link1: 'https://github.com/sultanparvez/PrayerTimeNotification',
        icon1: 'G',
        image: port6,
        title: 'Prayer Time Notification',
        description: 'This is an academic project. an android application, that provides user prayer time. it also has features like view maps and set alarm.'
    },
    {
        id: 8,
        category: 'Django',
        link1: 'https://github.com/sultanparvez/personal_portfolio',
        icon1: 'G',
        icon2: 'Y',
        image: port7,
        title: 'Personal Portfolio',
        description: 'A preliminary personal portfolio developed with django'
    },
    {
        id: 9,
        category: 'IOT',
        link1: 'https://github.com/sultanparvez/Accident-Prevention-Model',
        icon1: 'G',

        image: iot,
        title: 'Accident Prevention Model',
        description: 'This project was developed using image processing, machine learning and raspberrypi. As the name suggest this system can detect danger and warn the driver \n' +
            'about the imminent threat.'

    },
    {
        id: 10,
        category: 'Machine Learning',
        // link1: 'https://github.com/sultanparvez/Reinforcement-learning-applied-to-finance',
        icon1: 'G',

        image: port4,
        title: 'Reinforcement learning applied to finance',
        description: 'This was my thesis project, Here by utilizing reinforcement learning we developed a system which can trade automatically in stock trade market and make profit.'

    },
    {
        id: 11,
        category: 'IOT',
        link1: 'https://github.com/sultanparvez/Weather-Station',
        icon1: 'G',

        image: iot,
        title: 'Weather Station',
        description: 'A system that can predict the weather condition such as wheather is gonna rain in the upcoming few days, How the soil is, how humid the condition is.'

    },
  
    {
        id: 12,
        category: 'Automation',
        link1: 'https://github.com/sultanparvez/souvenir-memoirs-api-testing',
        icon1: 'G',

        image: automation,
        title: 'API Automation testing',
        description: 'Automation script, developed using cypress. Here I testedthe API endpoints to check if they are working as expected. i.e- CRUD operation, Data fetching'

    },
    {
        id: 13,
        category: 'Automation',
        link1: 'https://github.com/sultanparvez/e_commerce_automation',
        icon1: 'G',

        image: automation,
        title: 'E-commerce Automation',
        description: 'Automation script, developed using cucumber, webdriver i/o. Here I tested different functionality of the site. i.e- Login Auhtentication, Searching product, Navigation'

    },    {
        id: 14,
        category: 'Automation',
        link1: 'https://github.com/sultanparvez/souvenir-memoir-ui-automation',
        icon1: 'G',

        image: automation,
        title: 'Souvenior Memoir Ui Automation',
        description: 'This automation script, developed using cypress. Here I tested different UI of an website I developed.'

    },
    {
        id: 15,
        category: 'Automation',
        link1: 'https://github.com/sultanparvez/Test-Tracker-Automation',
        icon1: 'G',

        image: automation2,
        title: 'Task Tracker Automation',
        description: 'API testing automation, Here I tested different functionality of a site I developed.'

    },
    {
        id: 19,
        category: 'Automation',
        link1: 'https://github.com/sultanparvez/UI-Automation-Robot-framework',
        icon1: 'G',
        image: Robot,
        title: 'UI Automation - Robot Framework',
        description: 'Automation scripts for UI Test Automation utilizing Robot Framework. Agenda: ' +
            ' Validate unsuccesful login. ' +
            ' Veify the end to end ecommerce product purchase process. '+
            ' Verify user is able to fillup the login form.'
    },

]

export default portfolios;