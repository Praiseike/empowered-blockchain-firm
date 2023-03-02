// import GlobalStyles from '../globalStyles/globalStyles';
// import MissonImage from '../assets/images/img (4).webp';
// import VisionImage from '../assets/images/img (9).jpg';

import GlobalStyles from '../globalStyles/globalStyles';
import MissonImage from '../assets/images/pics/puzzle.jpg';
import VisionImage from '../assets/images/pics/laptops.jpg';
import {
    GiSpeedometer
} from 'react-icons/gi';

import {SlOrganization , SlBadge} from 'react-icons/sl';

export const missionContent = {
    headline: "mission",
    headlineColor: GlobalStyles.gradientText.main,
    title: "Be part of us",
    content: "We are geared towards raising talented Blockchain/Web3 enthusiast who will become relevant in the Blockchain/Web3 industry in providing solutions to every African and the world at large.",
    imageSource: MissonImage
};

export const visionContent = {
    headline: "vision",
    headlineColor: GlobalStyles.gradientText.accentRed,
    title: "Live our future",
    // content: "Providing Blockchain solutions and bringing Blockchain/cryptocurrency education to all Africans and the world at large",
    content: "The vision is to train, mentor and empower two million africans by helping them aquire the necessary skills they require to become relevant in the Blockchain/Web3 industry",
    imageSource: VisionImage
};

export const featuresContent = [
    {
        icon: GiSpeedometer,
        title: "Self Paced Courses",
        content: "A well packaged list of topics and resources that will help you in your journey in becoming a blockchain expert"
    },
    {
        icon: SlBadge,
        title: "Meet amazing mentors",
        content: "Enrolled Students get the opportunity to be mentored by experienced mentors in the field."
    },
    {
        icon: SlOrganization,
        title: "Clear and Concise Content",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eligendi voluptates est placeat. Tempora vel architecto officiis quis quam."
    },
];