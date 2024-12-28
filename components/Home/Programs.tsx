import React from 'react'

const Programs = () => {
  return (
    <section style={{ border: "2px solid red", padding: "20px" }}>
      <div className="flex justify-center items-center gap-8 bg-gray-200 p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-4">
                Programs We Offer
            </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h2>Spring 2025 Program</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div>
          <h2>Summer 2025 Program</h2>
          <ul>
            <li>Item A</li>
            <li>Item B</li>
            <li>Item C</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Programs