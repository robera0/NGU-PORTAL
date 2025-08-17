import SideBar from "../student/SideBar";
import NavBar from '../student/NavBar';
import Tools from "../student/Tools";
import Table from "../student/Table";
import { useSchedule } from "../../Context/Scheduler";
import Additem from "../student/Additem";
import { motion, AnimatePresence } from 'framer-motion';

const Schedule = () => {
  const Courses = ["Introduction to Computer Science", "Calculus I", "Academic Writing", "Advanced DataBase"];
  const CourseCode = ["CS101", "MA102", "ENG103", "ECN201"];
  const { AddItem } = useSchedule();
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      
      {/* Sidebar */}
      <div className="w-full lg:w-[17%] lg:ml-5 lg:mt-2">
        <div className="lg:fixed lg:w-[15%]">
          <SideBar />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full lg:w-[83%]">
        
        {/* Navbar */}
        <div className="mt-4 px-4 lg:mt-8">
          <NavBar />
        </div>

        {/* Overlay AddItem */}
        <AnimatePresence>
          {AddItem && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-full h-full flex justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Additem />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tools and Table */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6 px-4">
          <Tools />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
