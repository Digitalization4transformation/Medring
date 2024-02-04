import { faLeanpub, 
  // faPage4, 
  // faWindows 
} from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faTable,
  faLock,
  faNoteSticky,
  // faNotdef,
  faUsers,
  faVideoCamera
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: faTachometer,
  },
  // {
  //   label: 'Halaman'
  // },
  {
    label: "Comprehensive",
    path: "/comprehensive",
    icon: faLeanpub,
  },
  {
    label: "Video Lessons",
    path: "/404",
    icon: faVideoCamera,
  },
  
  // {
  //   label: 'Tabel dan Form'
  // },
  {
    label: "Forums",
    path: "/form",
    icon: faUsers,
  },
  {
    label: "AI Chat",
    path: "/chatbot",
    icon: faTable,
  },

  // {
  //   // label: 'Otentikasi'
  // },
  {
    label: "Login",
    path: "/auth/login",
    icon: faLock,
  },
  {
    label: "Register",
    path: "/auth/register",
    icon: faNoteSticky,
  },
];

export default initMenu