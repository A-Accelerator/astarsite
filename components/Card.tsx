import React from "react";

interface CardProps {
  imagePath: string;
  title: string;
  description: string;
}

const Card = ({ imagePath, title, description}: CardProps) => {
  return (
    <div
      style={{
        borderRadius: "8px",
        border: "1px solid #ccc",
        padding: "16px",
        maxWidth: "300px",
        textAlign: "center",
      }}
    >
      <img
        src={imagePath}
        alt={title}
        style={{ borderRadius: "8px", width: "100%", height: "auto" }}
      />
      <h3 style={{ margin: "16px 0 8px" }}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
