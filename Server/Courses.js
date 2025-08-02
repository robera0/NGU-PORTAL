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
    icon: faCode,
    grade: "A"
  },
  {
    course_id: "CSCI202",
    course_name: "Data Structures & Algorithms",
    instructor: "Mr. Daniel Mulugeta",
    credit_hours: 3,
    semester: "Fall 2025",
    icon: faNetworkWired,
    grade: "A-"
  },
  {
    course_id: "MATH201",
    course_name: "Discrete Mathematics",
    instructor: "Dr. Sara Hailu",
    credit_hours: 3,
    semester: "Fall 2025",
    icon: faSquareRootVariable,
    grade: "B+"
  },
  {
    course_id: "STAT210",
    course_name: "Statistics for Computer Science",
    instructor: "Mr. Elias Tadesse",
    credit_hours: 3,
    semester: "Fall 2025",
    icon: faChartBar,
    grade: "B"
  },
  {
    course_id: "CSCI205",
    course_name: "Database Systems",
    instructor: "Ms. Selamawit Bekele",
    credit_hours: 3,
    semester: "Fall 2025",
    icon: faDatabase,
    grade: "A"
  },
  {
    course_id: "CSCI230",
    course_name: "Computer Architecture",
    instructor: "Mr. Yohannes Mekonnen",
    credit_hours: 3,
    semester: "Fall 2025",
    icon: faMicrochip,
    grade: "A"
  },
  {
    course_id: "ENGL103",
    course_name: "Technical Writing",
    instructor: "Ms. Bethlehem Alemu",
    credit_hours: 3,
    semester: "Fall 2025",
    icon: faPenNib,
    grade: "A-"
  }
];

export default enrolledCourses;
