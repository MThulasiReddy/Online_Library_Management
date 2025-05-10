import thulasiImg from '../assets/thulasi.jpg';
import ashokImg from '../assets/ashok.jpg';
import vennelaImg from '../assets/vennela.jpg';
import mentorImg from '../assets/mentor.jpg';


export default function About() {
  const mentor = {
    name: "Dr. B Elangovan",
    role: "Supportive Mentor",
    image: mentorImg,
  };

  const members = [
    {
      name: "Thulasi Reddy",
      role: "Backend Developer",
      image: thulasiImg,
    },
    {
      name: "Ashok",
      role: "Frontend Developer",
      image: ashokImg,
    },
    {
      name: "Vennela",
      role: "Team Lead, UI/UX Designer & Tester",
      image: vennelaImg,
    },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Meet Our Project Team</h2>

      {/* Mentor Section */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Supportive Mentor</h3>
        <div style={{ display: 'inline-block', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <img 
            src={mentor.image}
            alt={mentor.name}
            style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }}
          />
          <h4 style={{ margin: '10px 0 5px', fontSize: '18px' }}>{mentor.name}</h4>
          <p style={{ fontSize: '14px', color: '#555' }}>{mentor.role}</p>
        </div>
      </div>

      {/* Team Members */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
        {members.map((member, index) => (
          <div key={index} style={{ width: '200px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <img 
              src={member.image}
              alt={member.name}
              style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }}
            />
            <h4 style={{ margin: '10px 0 5px', fontSize: '18px' }}>{member.name}</h4>
            <p style={{ fontSize: '14px', color: '#555' }}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
