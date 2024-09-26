import type { Config } from "tailwindcss";

module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Plus Jakarta Sans"', 'sans-serif']
  		},
		  screens: {
			'xs': '340px',
			'sm': '576px',
			'md': '768px',
			'lg': '992px',
			'xl': '1200px',
			'2xl': '1400px',
		  },
  		fontSize: {
  			h1: ['2.5rem', { lineHeight: '3.75rem' }],
  			h2: ['2rem', { lineHeight: '3.125rem' }],
  			h3: ['1.75rem', { lineHeight: '2.25rem' }],
  			h4: ['1.5rem', { lineHeight: '2rem' }],
  			h5: ['1.25rem', { lineHeight: '1.75rem' }],
  			h6: ['1rem', { lineHeight: '1.5rem' }],
  			body: ['1.125rem', { lineHeight: '1.75rem' }]
  		},
  		fontWeight: {
  			h1: '700',
  			h2: '600',
  			h3: '500',
  			h4: '500',
  			h5: '500',
  			h6: '400',
  			body: '400'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}