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
				// Improved Material Design 3 Color System with better combinations
				'md-primary': '#1976D2',
				'md-on-primary': '#FFFFFF',
				'md-primary-container': '#E3F2FD',
				'md-on-primary-container': '#0D47A1',
				
				'md-secondary': '#388E3C',
				'md-on-secondary': '#FFFFFF',
				'md-secondary-container': '#E8F5E8',
				'md-on-secondary-container': '#1B5E20',
				
				'md-tertiary': '#F57C00',
				'md-on-tertiary': '#FFFFFF',
				'md-tertiary-container': '#FFF3E0',
				'md-on-tertiary-container': '#E65100',
				
				'md-error': '#D32F2F',
				'md-on-error': '#FFFFFF',
				'md-error-container': '#FFEBEE',
				'md-on-error-container': '#B71C1C',
				
				'md-surface': '#FFFFFF',
				'md-on-surface': '#212121',
				'md-surface-variant': '#F5F5F5',
				'md-on-surface-variant': '#616161',
				'md-outline': '#BDBDBD',
				'md-outline-variant': '#E0E0E0',
				
				'md-shadow': '#000000',
				'md-scrim': '#000000',
				'md-inverse-surface': '#303030',
				'md-inverse-on-surface': '#FAFAFA',
				'md-inverse-primary': '#90CAF9',
				
				// Keep existing colors for compatibility
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#1976D2',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#388E3C',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#D32F2F',
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
