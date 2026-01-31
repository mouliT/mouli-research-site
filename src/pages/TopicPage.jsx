import { useParams } from "react-router-dom";

/*
 This component displays content for each topic page.
 It uses the URL parameter (topic) to load the correct data.
 If a topic does not exist yet, it shows a friendly message
 instead of crashing the website.
*/

const topicData = {
  "power-electronics": {
    title: "Power Electronics",
    description: "Converters, inverters, and control of power devices.",
    image: "/images/power-electronics.jpg",
    video: "",
    sections: [
      {
        heading: "Introduction",
        text: "Power electronics deals with conversion and control of electrical power using semiconductor devices."
      },
      {
        heading: "Applications",
        text: "Used in EVs, solar inverters, motor drives, and power supplies."
      }
    ]
  },

  "control-theory": {
    title: "Control Theory",
    description: "Feedback systems and stability analysis.",
    image: "/images/control-theory.gif",
    video: "",
    sections: [
      {
        heading: "What is Control?",
        text: "Control theory studies how to manipulate system inputs to achieve desired outputs."
      }
    ]
  },

  "electric-drives": {
    title: "Electric Drives",
    description: "Motors and drive systems.",
    image: "/images/electric-drives.jpg",
    video: "",
    sections: [
      {
        heading: "Coming Soon",
        text: "Content for Electric Drives will be added soon."
      }
    ]
  },

  "mathematics": {
    title: "Mathematics",
    description: "Mathematical foundations for engineering.",
    image: "/images/mathematics.jpg",
    video: "",
    sections: [
      {
        heading: "Coming Soon",
        text: "Content for Mathematics will be added soon."
      }
    ]
  },

  "simulations": {
    title: "Simulations",
    description: "Modeling and simulation techniques.",
    image: "/images/simulations.jpg",
    video: "",
    sections: [
      {
        heading: "Coming Soon",
        text: "Content for Simulations will be added soon."
      }
    ]
  },

  "experiments": {
    title: "Experiments",
    description: "Practical experiments and results.",
    image: "/images/experiments.jpg",
    video: "",
    sections: [
      {
        heading: "Coming Soon",
        text: "Content for Experiments will be added soon."
      }
    ]
  }
};

export default function TopicPage() {
  const { topic } = useParams();
  const data = topicData[topic];

  // If topic is not found, show message instead of crashing
  if (!data) {
    return (
      <div className="page fade-in">
        <h2>Topic not found</h2>
        <p>The topic "{topic}" does not exist yet.</p>
      </div>
    );
  }

  return (
    <div className="page fade-in">
      <h1>{data.title}</h1>
      <p className="subtitle">{data.description}</p>

      {/* Image or GIF */}
      <img src={data.image} alt={data.title} className="topic-image" />

      {/* Embedded video (only if exists) */}
      {data.video && (
        <div className="video-container">
          <iframe
            src={data.video}
            title={data.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Sections */}
      {data.sections.map((section, i) => (
        <div key={i} className="topic-section">
          <h2>{section.heading}</h2>
          <p>{section.text}</p>
        </div>
      ))}
    </div>
  );
}
