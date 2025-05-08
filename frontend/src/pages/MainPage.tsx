import React from 'react'
import { useState, useEffect } from 'react'
import MissionBlock from '../components/MissionBlock';

const MainPage = () => {

  interface Mission {
    title: string,
    deadline: string;
  }

  const [missions, setMissions] = useState<Mission[]>();
  
  useEffect(() => {
    fetch('http://localhost:8080/mission/list')
      .then(res => res.json())
      .then((data: Mission[]) => {
        setMissions(data);
      })
      .catch(console.error)
  }, []);


  return (
    <>
      {missions?.map((m, idx) => (
        <MissionBlock
          key={idx}
          title={m.title}
          deadline={new Date(m.deadline)}/>
      ))}
    </>
  )
}

export default MainPage