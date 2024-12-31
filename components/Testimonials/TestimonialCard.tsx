import React from 'react'

interface testimonialCardProps { 
    name: string;
    description: string;
}

const TestimonialCard = ({name, description}: testimonialCardProps) => {
    return (
        <div className='bg-black h-[450px] text-white rounded-xl'>
            <div className='flex flex-col justify-center items-cetner gap-4 p-4'>
                <p className='text-xl font-semibold'>
                    {name};
                </p>
                <p>
                    {description};
                </p>
            </div>
      </div>
  )
}

export default TestimonialCard;