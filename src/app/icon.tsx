import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Bottom Layer - Light Green */}
        <div
          style={{
            width: 28,
            height: 28,
            backgroundColor: '#4ade80',
            borderRadius: 6,
            position: 'absolute',
            transform: 'translate(2px, 2px)',
          }}
        />
        
        {/* Middle Layer - Medium Green */}
        <div
          style={{
            width: 28,
            height: 28,
            backgroundColor: '#22c55e',
            borderRadius: 6,
            position: 'absolute',
            transform: 'translate(1px, 1px)',
          }}
        />
        
        {/* Top Layer - Dark Green */}
        <div
          style={{
            width: 28,
            height: 28,
            backgroundColor: '#15803d',
            borderRadius: 6,
            position: 'absolute',
            transform: 'translate(0px, 0px)',
          }}
        />
        
        {/* Dollar Sign Icon */}
        <div
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            position: 'absolute',
            zIndex: 10,
          }}
        >
          $
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
