// import GlobalStyles from '../globalStyles/globalStyles';
// import MissonImage from '../assets/images/img (4).webp';
// import VisionImage from '../assets/images/img (9).jpg';

import GlobalStyles from '../globalStyles/globalStyles';
import MissonImage from '../assets/images/pics/puzzle.jpg';
import VisionImage from '../assets/images/pics/laptops.jpg';
import {
    BsCalendarRangeFill,
    BsFillMenuButtonWideFill

} from 'react-icons/bs';


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
        icon: BsFillMenuButtonWideFill,
        title: "Well Structured Curriculum",
        content: "well-structured lessons with challenging, measurable objectives and appropriate student engagement strategies, pacing, sequence, activities, materials, resources, technologies, and grouping."
    },
    {
        icon: BsCalendarRangeFill,
        title: "Mainstream Technologies",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis nobis unde dolorum nemo sequi officiis tempora vel architecto officiis quis quam."
    },
    {
        icon: BsFillMenuButtonWideFill,
        title: "Clear and Concise Content",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eligendi voluptates est placeat. Tempora vel architecto officiis quis quam."
    },
    {
        icon: BsFillMenuButtonWideFill,
        title: "100% Cost Effective",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eligendi voluptates est placeat. Tempora vel architecto officiis quis quam."
    }
];