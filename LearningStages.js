import './LearningStages.css';

function LearningStages() {
  const stages = [
    {
      level: "Level-1 Crawlers",
      grade: "Preschool",
      description: "Identify the letters and picture reading"
    },
    {
      level: "Level-2 Walkers",
      grade: "LKG",
      description: "Able to form the letters upto Swaragalu"
    },
    {
      level: "Level-3 Runners",
      grade: "UKG",
      description: "Capable of writing simple words"
    },
    {
      level: "Level-4 Flyers",
      grade: "1st Standard",
      description: "Ability to read and write simple sentences"
    },
    {
      level: "Level-5 Gliders",
      grade: "2nd Standard",
      description: "Accomplish basic fundamentals and confident to read and write independently"
    }
  ];

  return (
    <section className="learning-section">
      <h2 className="title">Five Learning Stages</h2>
      <div className="stages-container">
        {stages.map((stage, index) => (
          <div key={index} className="stage">
            <div className="stage-number">{index + 1}</div>
            <div className="stage-content">
              <h3 className="stage-title">{stage.level}</h3>
              <p>
                <span className="stage-grade">{stage.grade}:</span>
                <span className="stage-description">{stage.description}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LearningStages; 