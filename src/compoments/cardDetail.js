import {
  faPaintBrush,
  faCode,
  faTabletButton,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const cardDetail = [
  {
    id: 1,
    title: "Web Designing",
    icon: <FontAwesomeIcon icon={faPaintBrush} />,
    desc: "I have been designing the web contents using figma since 2020. ",
  },

  {
    id: 2,
    title: "Web Development",
    icon: <FontAwesomeIcon icon={faCode} />,
    desc: "I have been Developing websites using html,css,js,bootstarp,php and React since 2021. ",
  },

  {
    id: 3,
    title: "App Development",
    icon: <FontAwesomeIcon icon={faTabletButton} />,
    desc: "I have been Developing mobile appilication since 2022.",
  },

  {
    id: 4,
    title: "Youtube Videos",
    icon: <FontAwesomeIcon icon={faVideo} />,
    desc: "I have been providing educationl material through youtube videos since 2021.",
    channel: "visit my channel",
  },
];
