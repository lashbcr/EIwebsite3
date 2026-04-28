import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Enterprise Insight — Make Your Architects Unstoppable';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const EI_PATH =
  'M17,85.2v60h149h149v-60v-60H166H17V85.2 M374,263.7v238.5h60h60V263.7V25.2h-60h-60V263.7 M17,263.7v59.5h149h149v-59.5v-59.5H166H17V263.7 M17,442.2v60h149h149v-60v-60H166H17V442.2';

export default async function Image() {
  const font = await readFile(
    join(process.cwd(), 'public/Geist-Regular.ttf'),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: 'linear-gradient(135deg, #060b14 0%, #0d1626 60%, #060b14 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'Geist',
        }}
      >
        {/* Ghost mark top-right */}
        <div
          style={{
            position: 'absolute',
            right: -80,
            top: -80,
            opacity: 0.06,
            display: 'flex',
          }}
        >
          <svg width="520" height="520" viewBox="10 20 490 490" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" fill="#EC2C44" d={EI_PATH} />
          </svg>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'linear-gradient(90deg, transparent 0%, #EC2C44 30%, #EC2C44 70%, transparent 100%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 100px',
          }}
        >
          {/* Logo row */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 52 }}>
            <svg width="52" height="52" viewBox="10 20 490 490" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" fill="#EC2C44" d={EI_PATH} />
            </svg>
            <span
              style={{
                marginLeft: 16,
                fontSize: 24,
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '-0.3px',
              }}
            >
              Enterprise Insight
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 32,
            }}
          >
            <span
              style={{
                fontSize: 66,
                color: '#ffffff',
                textAlign: 'center',
                lineHeight: 1.08,
                letterSpacing: '-3px',
              }}
            >
              Make Your Architects
            </span>
            <span
              style={{
                fontSize: 66,
                color: '#ffffff',
                textAlign: 'center',
                lineHeight: 1.08,
                letterSpacing: '-3px',
              }}
            >
              Unstoppable
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 21,
              color: '#3d5068',
              textAlign: 'center',
              letterSpacing: '-0.2px',
              marginBottom: 52,
            }}
          >
            AI-powered enterprise architecture platform · KeystoneEA™
          </div>

          {/* Domain */}
          <div
            style={{
              fontSize: 15,
              color: '#253142',
              letterSpacing: '0.8px',
            }}
          >
            ENTERPRISEINSIGHT.IO
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Geist',
          data: font,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  );
}
