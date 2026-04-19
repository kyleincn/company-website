/**
 * GDX-VR Design System - Tailwind CSS Configuration
 * Based on lead-designer's design system
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // 色彩系统 - GDX-VR Design System
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          dark: '#0052CC',
          light: '#E6F0FF',
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0066FF',
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
        },
        'deep-space': '#0A1628',
        'aurora-cyan': '#00D4FF',
        'smart-purple': '#6366F1',
        'energy-orange': '#FF6B35',
        'eco-green': '#10B981',
        // 中性色
        'text-primary': '#1F2937',
        'text-secondary': '#6B7280',
        'text-muted': '#9CA3AF',
      },
      // 字体
      fontFamily: {
        sans: ['-apple-system', 'PingFang SC', 'Microsoft YaHei', 'Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      // 渐变
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0066FF 0%, #6366F1 50%, #00D4FF 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A1628 0%, #111827 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0066FF 0%, #0A1628 100%)',
      },
      // 阴影
      boxShadow: {
        'sm': '0 2px 8px rgba(0,0,0,0.06)',
        'md': '0 4px 24px rgba(0,0,0,0.08)',
        'lg': '0 12px 40px rgba(0,102,255,0.15)',
        'glow': '0 0 40px rgba(0, 102, 255, 0.3), 0 0 80px rgba(0, 212, 255, 0.1)',
      },
      // 动画
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(10px)' },
        },
      },
      // 间距
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
      },
      // 圆角
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      // 过渡
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
