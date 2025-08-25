import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@tanstack/react-query';

const Chat = () => {
  const fetchStudent = async () => {
    const res = await fetch('http://localhost:8000/api/students');
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  };

  const { data: stud, isFetching, error } = useQuery({
    queryKey: ['student'],
    queryFn: fetchStudent,
  });

  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

  const grouped = alphabet
    .map((letter) => {
      const studentsForLetter = stud?.filter(
        (s) => s.firstname.charAt(0).toLowerCase() === letter.toLowerCase()
      );
      if (!studentsForLetter || studentsForLetter.length === 0) return null;
      return { letter: letter.toUpperCase(), students: studentsForLetter };
    })
    .filter((group) => group !== null);

  if (isFetching) return <p>Loading students...</p>;
  if (error) return <p className="text-red-500">Failed to fetch students.</p>;

  return (
    <div className="scroll-box bg-white w-90 h-screen shadow-2xl flex flex-col items-center">
      {/* Top Bars */}
      <div className="w-full flex justify-around h-12 pt-2 bg-purple-400">
        <button className="text-md">NOTES</button>
        <button>ALERTS</button>
        <button>CHATS</button>
      </div>

      {/* Chat List Header */}
      <div className="flex w-full pt-4 justify-between">
        <div className="ml-3">
          <button className="w-8 h-8 justify-center flex items-center rounded-md bg-purple-700 hover:bg-purple-500 duration-300 cursor-pointer">
            <FontAwesomeIcon className="text-sm h-full w-full text-white font-bold" icon={faPlus} />
          </button>
        </div>
        <div>
          <h1 className="font-bold text-md text-purple-600">Chat List</h1>
          <p className="text-gray-400 text-sm">Show All</p>
        </div>
        <div className="mr-8">
          <button className="w-8 h-8 justify-center flex items-center rounded-md bg-purple-700 hover:bg-purple-500 duration-300 cursor-pointer">
            <FontAwesomeIcon className="text-sm text-white font-bold" icon={faEllipsis} />
          </button>
        </div>
      </div>

      {/* Alphabetically Ordered Students */}
      <div className="w-full h-full overflow-y-auto">
        {grouped?.map((g) => (
          <React.Fragment key={g.letter}>
            <div className="flex items-center pl-4 w-full h-8 bg-purple-300">
              <h1 className="font-bold text-md">{g.letter}</h1>
            </div>
            <div>
              {g.students?.map((sb) => (
                <div key={sb.id || sb.firstname} className="space-y-3 pl-3">
                  <div className="flex  justidy-center  items-center gap-2 border-b-gray-400 pb-2">
                    <div
                      className="w-8 h-8 border  border-purple-400 bg-cover rounded-full bg-orange-500 flex justify-center items-center"
                      style={{ backgroundImage: `url("/defaultUser.jpg")` }}
                    ></div>
                    <div className='flex flex-col justify-center '>
                      <h1 className="font-semibold text-md">{sb.firstname}</h1>
                      <p className="text-gray-400 text-sm">{`${sb.lastname} is online`}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Chat;
