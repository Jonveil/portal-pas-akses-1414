import React, { useState } from "react";

function Governance() {
  // Data simulasi (dummy data) untuk demo
  // Nanti bila pandai database, kita boleh simpan betul-betul
  const [ideas, setIdeas] = useState([
    { id: 1, text: "Launch NFT Collection", likes: 15, liked: false },
    { id: 2, text: "Create 1414 Merchandise", likes: 8, liked: false },
    { id: 3, text: "Weekly Lucky Draw", likes: 42, liked: false },
    { id: 4, text: "Collaborate with PUF", likes: 25, liked: false },
  ]);

  // Fungsi untuk Like / Unlike
  const toggleLike = (id) => {
    const updatedIdeas = ideas.map((idea) => {
      if (idea.id === id) {
        return {
          ...idea,
          likes: idea.liked ? idea.likes - 1 : idea.likes + 1, // Tambah atau tolak
          liked: !idea.liked
        };
      }
      return idea;
    });
    setIdeas(updatedIdeas);
  };

  // Susun idea: Paling banyak like duduk atas
  const sortedIdeas = [...ideas].sort((a, b) => b.likes - a.likes);

  return (
    <div style={{paddingBottom:'50px'}}>
      <h2 style={{color: '#ff0000', marginBottom: '10px', textTransform: 'uppercase'}}>Community Ideas</h2>
      <p style={{color:'#888', fontSize:'12px', marginBottom:'20px'}}>
        Top voted ideas will be prioritized.
      </p>

      <div style={{display:'flex', flexDirection:'column', gap:'15px'}}>
        {sortedIdeas.map((idea, index) => (
          <div key={idea.id} style={{
            backgroundColor: '#111',
            border: idea.liked ? '1px solid #ff0000' : '1px solid #333',
            borderRadius: '12px',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'all 0.3s'
          }}>
            <div style={{display:'flex', gap:'15px', alignItems:'center'}}>
              {/* Nombor Ranking */}
              <div style={{fontSize:'24px', fontWeight:'900', color:'#333'}}>#{index + 1}</div>
              <div style={{textAlign:'left'}}>
                <div style={{color:'white', fontWeight:'bold', fontSize:'14px'}}>{idea.text}</div>
              </div>
            </div>

            {/* Butang Like */}
            <button 
              onClick={() => toggleLike(idea.id)}
              style={{
                background: idea.liked ? '#ff0000' : '#222',
                color: 'white',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                display:'flex', 
                flexDirection:'column',
                alignItems:'center',
                minWidth:'50px'
              }}
            >
              <span style={{fontSize:'16px'}}>🔥</span>
              <span style={{fontSize:'12px', fontWeight:'bold'}}>{idea.likes}</span>
            </button>
          </div>
        ))}
      </div>

      <div style={{marginTop:'30px', padding:'20px', border:'1px dashed #333', borderRadius:'10px', color:'#555'}}>
        Submit new idea (Coming Soon)
      </div>
    </div>
  );
}

export default Governance;
