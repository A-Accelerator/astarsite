import React from 'react'

interface TeamProps {
  imagePath: string;
  name: string;
  blurb: string;
}

const Teammamte = ({ imagePath, name, blurb }: TeamProps) => {
return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={imagePath} alt={name} style={{ marginRight: '20px', width: '100px', height: '100px', objectFit: 'cover' }} />
        <div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{name}</h2>
            <p>{blurb}</p>
        </div>
    </div>
);
};

export default Teammamte;