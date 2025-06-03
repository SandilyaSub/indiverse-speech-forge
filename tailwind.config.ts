import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Material Design 3 Color System
				'md-primary': '#6750A4',
				'md-on-primary': '#FFFFFF',
				'md-primary-container': '#EADDFF',
				'md-on-primary-container': '#21005D',
				
				'md-secondary': '#625B71',
				'md-on-secondary': '#FFFFFF',
				'md-secondary-container': '#E8DEF8',
				'md-on-secondary-container': '#1D192B',
				
				'md-tertiary': '#7D5260',
				'md-on-tertiary': '#FFFFFF',
				'md-tertiary-container': '#FFD8E4',
				'md-on-tertiary-container': '#31111D',
				
				'md-error': '#B3261E',
				'md-on-error': '#FFFFFF',
				'md-error-container': '#F9DEDC',
				'md-on-error-container': '#410E0B',
				
				'md-surface': '#FFFBFE',
				'md-on-surface': '#1C1B1F',
				'md-surface-variant': '#E7E0EC',
				'md-on-surface-variant': '#49454F',
				'md-outline': '#79747E',
				'md-outline-variant': '#CAC4D0',
				
				'md-shadow': '#000000',
				'md-scrim': '#000000',
				'md-inverse-surface': '#313033',
				'md-inverse-on-surface': '#F4EFF4',
				'md-inverse-primary': '#D0BCFF',
				
				// Keep existing colors for compatibility
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#6750A4',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#625B71',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#B3261E',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				indic: {
					purple: '#6750A4',
					"purple-light": '#D0BCFF',
					"purple-dark": '#21005D',
					green: '#4ADE80',
					blue: '#60A5FA',
					red: '#B3261E',
					orange: '#FB923C',
					gray: '#F3F4F6',
					"gray-dark": '#9CA3AF'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					to: { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-gentle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'processing': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'wave': {
					'0%, 100%': { transform: 'scaleY(1)' },
					'50%': { transform: 'scaleY(1.5)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200px 0' },
					'100%': { backgroundPosition: 'calc(200px + 100%) 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'pulse-gentle': 'pulse-gentle 2s infinite',
				'processing': 'processing 1s linear infinite',
				'wave': 'wave 1s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite linear'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
