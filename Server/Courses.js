import {
  faCode,
  faNetworkWired,
  faSquareRootVariable,
  faChartBar,
  faDatabase,
  faMicrochip,
  faPenNib
} from '@fortawesome/free-solid-svg-icons';

const enrolledCourses = [
  {
    course_id: "CSCI101",
    course_name: "Introduction to Programming",
    instructor: "Dr. Alice Tesfaye",
    credit_hours: 3,
    semester: "Fall 2025",
    icon: faCode
  },
  {
    course_id: "CSCI202",
    course_name: "Data Structures & Algorithms",
    instructor: "Mr. Daniel Mulugeta",
    credit_hours: 3,
    semester: "Fall 2025",
    icon: faNetworkWired
  },
  {
    course_id: "MATH201",
    course_name: "Discrete Mathematics",
    instructor: "Dr. Sara Hailu",
    credit_hours: 3,
    semester: "Fall 2025",
    icon: faSquareRootVariable
  },
  {
    course_id: "STAT210",
    course_name: "Statistics for Computer Science",
    instructor: "Mr. Elias Tadesse",
    credit_hours: 3,
    semester: "Fall 2025",
    icon: faChartBar
  },
  {
    course_id: "CSCI205",
    course_name: "Database Systems",
    instructor: "Ms. Selamawit Bekele",
    credit_hours: 3,
    semester: "Fall 2025",
    icon: faDatabase
  },
  {
    course_id: "CSCI230",
    course_name: "Computer Architecture",
    instructor: "Mr. Yohannes Mekonnen",
    credit_hours: 3,
    semester: "Fall 2025",
    icon: faMicrochip
  },
  {
    course_id: "ENGL103",
    course_name: "Technical Writing",
    instructor: "Ms. Bethlehem Alemu",
    credit_hours: 3,
    semester: "Fall 2025",
    icon: faPenNib
  }
];

export default enrolledCourses;
