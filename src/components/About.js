import React from 'react';

export default function About(props) {
  // Define styles based on the mode (dark or light)
  const cardStyle = {
    backgroundColor: props.mode === 'dark' ? '#2c3e50' : '#f7f7f7',  // Background color for dark and light modes
    color: props.mode === 'dark' ? '#f1f1f1' : '#2c3e50',  // Text color for dark and light modes
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: props.mode === 'dark'
      ? '0 4px 12px rgba(0, 0, 0, 0.4)'  // Shadow for dark mode
      : '0 4px 12px rgba(0, 0, 0, 0.1)',  // Shadow for light mode
    marginBottom: '20px',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: props.mode === 'dark' ? '#f1f1f1' : '#2c3e50',  // Heading color for dark and light mode
  };

  const accordionButtonStyle = {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    color: props.mode === 'dark' ? '#f1f1f1' : '#2c3e50',  // Text color for dark and light mode
    backgroundColor: props.mode === 'dark' ? '#34495e' : '#ffffff',  // Background for dark and light mode
    border: props.mode === 'dark' ? '1px solid #f1f1f1' : '1px solid #2c3e50',  // Border color for dark and light mode
    borderRadius: '5px',
  };

  const accordionBodyStyle = {
    backgroundColor: props.mode === 'dark' ? '#34495e' : '#ffffff',  // Background color for dark and light mode
    color: props.mode === 'dark' ? '#f1f1f1' : '#2c3e50',  // Text color for dark and light mode
    padding: '1rem',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease',  // Smooth transition effect
  };

  return (
    <div className='container my-5'>
      <div style={cardStyle}>
        {/* Main Heading */}
        <h1 style={headingStyle}>About NewsHub</h1>

        {/* Accordion Section */}
        <div className="accordion" id="accordionExample">

          {/* Mission Section */}
          <div className="accordion-item" style={{ border: 'none' }}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={accordionButtonStyle}
              >
                Our Mission
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={accordionBodyStyle}>
                <strong>Delivering Timely and Reliable News.</strong> At NewsHub, our mission is to provide up-to-date, trustworthy, and comprehensive news from around the world. Whether it's breaking news, in-depth analysis, or insightful reporting, we aim to keep our global audience informed and empowered. Our focus is on delivering value by covering the stories that matter, with accuracy and speed, while maintaining the highest journalistic standards.
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="accordion-item" style={{ border: 'none' }}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={accordionButtonStyle}
              >
                Our Values
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={accordionBodyStyle}>
                <strong>Integrity, Accountability, and Objectivity.</strong> At the heart of NewsHub, we uphold the principles of journalistic integrity. We are committed to being transparent, accurate, and fair in our reporting. Our values guide us to prioritize the truth and present diverse perspectives on global issues. Every news story we cover is driven by a commitment to objectivity and accountability, ensuring our audience receives unbiased and well-rounded information.
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="accordion-item" style={{ border: 'none' }}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={accordionButtonStyle}
              >
                Our Vision
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={accordionBodyStyle}>
                <strong>Shaping the Future of Global Journalism.</strong> NewsHub envisions a world where reliable and quality news is accessible to everyone, no matter where they are. We aim to be at the forefront of digital news by embracing new technologies, expanding our reach, and adapting to the ever-changing media landscape. Our vision is to continue growing as a trusted news source that empowers individuals and communities worldwide by keeping them informed about critical events, trends, and developments.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
