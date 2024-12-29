module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00FFFF',
        neonPurple: '#A020F0',
        neonPink: '#FF1493',
        neonGreen: '#39FF14',
        white: '#ffffff',
        whiteGrey: 'rgb(250,250,250)',
        neonYellow: '#afaf28', // Added neon yellow for vibrant accents
        deepSpace: '#121212', // A darker black for space themes
        galaxyGray: '#242424', // Slightly lighter black for contrasts
        spaceBlack: '#0B0C10',
        spaceGray: 'rgba(32,40,51,0.91)',
      },
      fontFamily: {
        techno: ['Orbitron', 'sans-serif'],
        futuristic: ['"Roboto Mono"', 'monospace'],
        sleek: ['"Exo 2"', 'sans-serif'], // Added a sleek font
        classic: ['"Raleway"', 'sans-serif'], // Added a modern yet classic font
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        neonPulse: 'neonPulse 1.5s infinite',
        glowSpin: 'glowSpin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        neonPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        glowSpin: {
          '0%': { transform: 'rotate(0deg)', filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.5)' },
          '100%': { transform: 'rotate(360deg)', filter: 'brightness(1)' },
        },
      },
      boxShadow: {
        neon: '0 0 8px 2px rgba(0, 255, 255, 0.7)',
        deepGlow: '0 0 15px 3px rgba(160, 32, 240, 0.8)',
        subtleGlow: '0 0 5px 2px rgba(255, 255, 255, 0.5)',
      },
      spacing: {
        '72': '18rem', // Larger spacing utilities
        '84': '21rem',
        '96': '24rem',
      },
      backgroundImage: {
        'galaxy-pattern': "url('/src/assets/galaxy.jpg')", // Custom background
        'gradient-radial': 'radial-gradient(circle, #1F2833, #0B0C10)',
        'gradient-neon': 'linear-gradient(45deg, #FF1493, #00FFFF, #39FF14)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Useful for styling forms
    require('@tailwindcss/typography'), // For advanced text styling
  ],
};
