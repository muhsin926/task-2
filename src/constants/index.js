import {
  AiOutlineUser,
  AiOutlineCloudUpload,
  AiOutlineMail,
} from "react-icons/ai";
import { LiaCheckDoubleSolid } from "react-icons/lia";

export const PLANS = [
  {
    name: "Basic",
    amount: "$89.99/mo",
    offerAmount: "$ 9.99/mo",
    btnColor: "#ffd724a3",
    wilGet: [
      {
        icon: <AiOutlineUser />,
        text: "Upto 25 Users",
      },
      {
        icon: <AiOutlineCloudUpload />,
        text: "Upto 25gb Storage",
      },
      {
        icon: <AiOutlineMail />,
        text: "Email Support",
      },
    ],
  },
  {
    name: "Standard",
    amount: "$ 189.99/mo",
    offerAmount: "$ 99.99/mo",
    btnColor: "rgb(255 63 98 / 64%)",
    wilGet: [
      {
        icon: <AiOutlineUser />,
        text: "Upto 50 Users",
      },
      {
        icon: <AiOutlineCloudUpload />,
        text: "Upto 60gb Storage",
      },
      {
        icon: <AiOutlineMail />,
        text: "Email+Chat Support",
      },
    ],
  },
  {
    name: "Premium",
    amount: "$ 389.99/mo",
    offerAmount: "$ 199.99/mo",
    btnColor: "rgb(255 63 247 / 64%)",
    wilGet: [
      {
        icon: <AiOutlineUser />,
        text: "Upto 75 Users",
      },
      {
        icon: <AiOutlineCloudUpload />,
        text: "Upto 100gb Storage",
      },
      {
        icon: <AiOutlineMail />,
        text: "Email+Chat+Whatsapp Support",
      },
    ],
  },
];

export const PLAN_CATEGORIES = [
  {
    title: "Free Starter",
    subTitle: "Free forever",
    text: "The quickest and easiest way to try protocols with basic functionalities.",
    btnContent: "Get Started",
    willGet: [
      {
        icon: <AiOutlineUser />,
        text: "Upto 8 Users",
      },
      {
        icon: <AiOutlineCloudUpload />,
        text: "Upto 3gb Storage",
      },
      {
        icon: <AiOutlineMail />,
        text: "Email Support",
      },
      {
        icon: <LiaCheckDoubleSolid />,
        text: "Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, Director and Team Management included",
      },
    ],
  },
  {
    title: "Enterprise Plan",
    subTitle: "Let's Connect",
    text: "Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success.",
    btnContent: "Contact Us",
    willGet: [
      {
        icon: <AiOutlineUser />,
        text: "More than 75 Users",
      },
      {
        icon: <LiaCheckDoubleSolid />,
        text: "Customization of all other features",
      },
    ],
  },
];
