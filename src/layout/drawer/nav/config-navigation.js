// routes
// import { PATH_DASHBOARD } from "../../../routes/paths";
// components
// import Label from "../../../Components/label";
// import Iconify from "../../../muiComponents/iconify";
import SvgColor from "../../../muiComponents/svg-color";
import { MdDashboard, MdOutlineDeleteOutline } from "react-icons/md";
import {
  FaBriefcase,
  FaDotCircle,
  FaEnvelopeOpenText,
  FaStarOfLife,
  FaThList,
  FaUser,
  FaUserCheck,
  FaUserCog,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import {
  BsEnvelopePaperFill,
  BsFillBellFill,
  BsFillPersonVcardFill,
  BsQuestionCircle,
} from "react-icons/bs";
import { BiFileFind, BiSolidContact, BiSupport } from "react-icons/bi";
import {
  AiFillStar,
  AiOutlineFileText,
  AiTwotoneFileText,
} from "react-icons/ai";
// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  blog: icon("ic_blog"),
  cart: icon("ic_cart"),
  chat: icon("ic_chat"),
  mail: icon("ic_mail"),
  user: icon("ic_user"),
  file: icon("ic_file"),
  lock: icon("ic_lock"),
  label: icon("ic_label"),
  blank: icon("ic_blank"),
  kanban: icon("ic_kanban"),
  folder: icon("ic_folder"),
  banking: icon("ic_banking"),
  booking: icon("ic_booking"),
  invoice: icon("ic_invoice"),
  calendar: icon("ic_calendar"),
  disabled: icon("ic_disabled"),
  external: icon("ic_external"),
  menuItem: icon("ic_menu_item"),
  ecommerce: icon("ic_ecommerce"),
  analytics: icon("ic_analytics"),
  dashboard: icon("ic_dashboard"),
};

const navConfig = [
  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: "Dashboard",
    permission: "dashboard-subheader-root",
    items: [
      // DASHBOARD
      {
        permission: "dashboard-root",
        title: "Dashboard",
        path: "/master/dashboard",
        icon: <MdDashboard size={16} />,
      },
    ],
  },

  // APP
  // ----------------------------------------------------------------------
  {
    subheader: "Management",
    permission: "management-subheader-root",
    items: [
      {
        permission: "driver-root",
        title: "Drivers",
        icon: <FaUserCog size={16} />,
        path: "/master/driver",
        children: [
          // change by me
          {
            permission: "driver-companies",
            title: "Driver Companies",
            path: "/master/driversuser",
            icon: <FaDotCircle size={16} />,
          },
          {
            permission: "driver-drivers",
            title: "Driver",
            path: "/master/driver/drivers",
            icon: <FaDotCircle size={16} />,
          },
          
        ],
      },
      {
        permission: "customer-root",
        title: "Customers",
        icon: <FaUser size={16} />,
        path: "/master/customer",
        children: [
          {
            permission: "customer-company",
            title: "Companies",
            path: "/master/customer/users",
            icon: <FaDotCircle size={16} />,
          },
          {
            permission: "customers-customers",
            title: "Customers",
            path: "/master/customer/customers",
            icon: <FaDotCircle size={16} />,
          },
        ],
      },
      {
        permission: "job-root",
        title: "Jobs",
        icon: <FaBriefcase size={16} />,
        path: "/master/job",
        children: [
          {
            permission: "job-jobs",
            title: "Jobs ",
            path: "/master/job/jobs/list",
            icon: <BsFillPersonVcardFill size={16} />,
          },
          {
            permission: "job-job-deleted",
            title: "Job Deleted ",
            path: "/master/job/job_deleted/list",
            icon: <MdOutlineDeleteOutline size={18} />,
          },
        ],
      },
      {
        permission: "page-setting-root",
        title: "Page Settings",
        icon: <IoMdSettings size={16} />,
        path: "/master/setting/",
        children: [
          {
            permission: "page-setting-about",
            title: "About Us ",
            path: "/master/setting/aboutus/add",
            icon: <BsFillPersonVcardFill size={16} />,
          },
          {
            permission: "page-setting-privacy-policy",
            title: "Privacy Policy",
            path: "/master/setting/privacy-policy/add",
            icon: <AiTwotoneFileText size={16} />,
          },
          {
            permission: "page-setting-faq",
            title: "FAQ",
            path: "/master/setting/faq/add",
            icon: <BsQuestionCircle size={16} />,
          },
          {
            permission: "page-setting-contact",
            title: "Contact Us",
            path: "/master/setting/contactus/add",
            icon: <BiSolidContact size={16} />,
          },
          {
            permission: "page-setting-term-condition",
            title: "Terms & Conditions",
            path: "/master/setting/term-and-conditions/add",
            icon: <FaStarOfLife size={16} />,
          },
        ],
      },
      {
        permission: "sub-admin-root",
        title: "Sub Admin",
        icon: <FaUserCheck size={16} />,
        path: "/master/sub-admin",
        children: [
          {
            permission: "sub-admin-sub-admin",
            title: "Sub Admin",
            path: "/master/sub-admin/list",
            icon: <FaDotCircle size={16} />,
          },
        ],
      },
      {
        permission: "subscription-root",
        title: "Subscriptions",
        icon: <FaBriefcase size={16} />,
        path: "/master/subscription/subscriptions",
      },
      {
        permission: "blog-root",
        title: "Blogs",
        icon: <FaThList size={16} />,
        path: "/master/blog/blogs",
      },
      // {
      //   title: "Support",
      //   icon: <BiSupport size={16} />,
      //   path: "/master/support/supports",
      // },
      {
        permission: "testimonial-root",
        title: "Testimonials",
        icon: <AiFillStar size={16} />,
        path: "/master/review/review-ratings",
      },
      {
        permission: "news-letter-root",
        title: "News Letter",
        icon: <FaEnvelopeOpenText size={16} />,
        path: "/master/newsletter/newsletters",
      },
      {
        permission: "notification-management-root",
        title: "Notification Management",
        icon: <BsFillBellFill size={16} />,
        path: "/master/notificationmanagement/notificationmanagements",
      },
    ],
  },
];

export default navConfig;
