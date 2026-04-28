import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#060b14',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Simplified EI mark — two vertical bars + two horizontal bars */}
        <svg
          width="120"
          height="120"
          viewBox="10 20 490 490"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#EC2C44"
            d="M17,85.2v60h149h149v-60v-60H166H17V85.2 M374,263.7v238.5h60h60V263.7V25.2h-60h-60V263.7 M17,263.7v59.5h149h149v-59.5v-59.5H166H17V263.7 M17,442.2v60h149h149v-60v-60H166H17V442.2"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
