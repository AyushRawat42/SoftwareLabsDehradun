import { ImageResponse } from 'next/og';

export const alt = 'The Software Lab — Web, Software & Digital Growth';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          color: '#ffffff',
          background: 'linear-gradient(135deg, #0A1729 0%, #0F2D54 70%, #10596b 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              width: 64,
              height: 64,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
              color: '#0A1729',
              background: '#10A5B5',
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            SL
          </div>
          <span style={{ fontSize: 28, fontWeight: 700 }}>The Software Lab</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span style={{ maxWidth: 950, fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            Web, software &amp; digital growth
          </span>
          <span style={{ color: '#8de4e9', fontSize: 26 }}>
            Dehradun, Uttarakhand · Serving India
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
