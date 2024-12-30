import React from 'react'

interface AboutCompanyProps { 

    name: string;
    description: string;
}

const AboutCompany = ({ name, description}: AboutCompanyProps) => {
  return (
      <section className='flex flex-col items-center justfiy-center'>
            <h2>{name}</h2>
            <p>{description}</p>
     </section>
  )
}

export default AboutCompany;