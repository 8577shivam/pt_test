import { createContext, useState } from 'react';

const AvailabilityContext = createContext();

const AvailabilityProvider = ({ children }) => {
  const [status, setStatus] = useState('Actively looking for a job');
  const [availability, setAvailability] = useState('1 month');
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: '', experience: 1, description: '' });
 
  const [currentIndex, setCurrentIndex] = useState(null);

  const value = {
    status,
    setStatus,
    availability,
    setAvailability,
    skills,
    setSkills,
    setNewSkill,
    newSkill  ,
    currentIndex, setCurrentIndex
  };

  return (
    <AvailabilityContext.Provider value={value}>
      {children}
    </AvailabilityContext.Provider>
  );
};

export { AvailabilityProvider, AvailabilityContext };