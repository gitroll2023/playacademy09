"use client";

export default function PlantGallery() {
  return (
    <div id="gallery" className="sigols-container" style={{ margin: '40px auto' }}>
      {/* 남평 식물원 갤러리 */}
      <div className="retro-section" style={{ padding: '30px', borderRadius: '3px' }}>
        <h2 className="retro-title gungsuh-text" style={{ fontSize: '24px', textAlign: 'center', marginBottom: '30px', borderBottom: '2px solid #999999', paddingBottom: '15px' }}>
          식물원 갤러리
        </h2>

        {/* 갤러리 그리드 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
          {[
            { num: 1, ext: 'png' },
            { num: 2, ext: 'png' },
            { num: 3, ext: 'png' },
            { num: 4, ext: 'png' },
            { num: 5, ext: 'png' },
            { num: 6, ext: 'png' }
          ].map(({ num, ext }) => (
            <div key={num} className="retro-card" style={{ padding: '10px', borderRadius: '5px' }}>
              <div style={{
                width: '100%',
                height: '200px',
                borderRadius: '3px',
                overflow: 'hidden',
                border: '1px solid #ddd'
              }}>
                <img
                  src={`/flower/${num}.${ext}`}
                  alt={`식물원 - ${num}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}