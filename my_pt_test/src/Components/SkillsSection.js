import React, { useContext, useState } from 'react';
import { AvailabilityContext } from './availabilityContext';

function SkillsSection() {
  // const [skills, setSkills] = useState([]);
  // const [newSkill, setNewSkill] = useState({ name: '', experience: 1, description: '' });
  const { skills, newSkill ,setSkills,setNewSkill,currentIndex,setCurrentIndex} = useContext(AvailabilityContext);

  
  const [isEditing, setIsEditing] = useState(false);
 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSkill({ ...newSkill, [name]: value });
  };

 

  const addSkill = () => {
    if (isEditing) {
      const updatedSkills = [...skills];
      updatedSkills[currentIndex] = newSkill;
      setSkills(updatedSkills);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setSkills([...skills, newSkill]);
    }
    setNewSkill({ name: '', experience: 1, description: '' });
  };

  const editSkill = (index) => {
    setNewSkill(skills[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  return (
    <div className="App px-8 py-6 px-4 bg-[#1f1f1f] rounded-md">
      <h2 className='mb-4'>Top skills:</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className='flex justify-between items-center border border-gray-400 px-2  rounded-md'>
            {skill.name} 
            <button onClick={() => editSkill(index)}>Edit</button>
          </li>
        ))}
      </ul>
      <h2 className='mt-[12px]'>{isEditing ? 'Edit' : 'Add'} a skill</h2>
      <div>
       <div className='flex gap-5'>
       <input
          type="text"
          name="name"
          value={newSkill.name}
          onChange={handleInputChange}
          placeholder="Skill name"
          className='w-[80%] bg-transparent border border-gray-400 px-2 py-2 rounded-md'
        />
        <select
          name="experience"
          value={newSkill.experience}
          onChange={handleInputChange}
          className='w-[20%] bg-transparent text-white  border border-gray-400 px-2 py-2 rounded-md'
        >
          {[...Array(11).keys()].map((num) => (
            <option className='bg-transparent' key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
        <textarea
          name="description"
          value={newSkill.description}
          onChange={handleInputChange}
          placeholder="Describe your experience"
          className='bg-transparent w-[100%] border border-gray-400 rounded-md  px-2 py-2'
        />
        <button onClick={addSkill}>{isEditing ? 'Update' : 'Add'}</button>
      </div>
    </div>
  );
}

export default SkillsSection;
