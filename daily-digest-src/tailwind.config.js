/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FDFBF7', // 暖白羊皮纸
        'bg-soft': '#F5F2EB', // 稍微深一点的米色
        panel: '#FFFFFF', // 纯白卡片增加对比度
        'panel-strong': '#FAFAF8',
        line: '#DCD6CB', // 复古灰褐分割线
        text: '#2A2825', // 柔和深碳黑，而非刺眼纯黑
        muted: '#7D7568', // 次要灰调文字
        primary: '#C15B3D', // 陶土红 Terracotta
        'primary-2': '#4A5D6E', // 灰雾蓝 Slate Blue
        accent: '#DDA77B', // 赭石黄
        danger: '#B94A48', 
        good: '#457B5D', // 松针绿
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      boxShadow: {
        // 实体书签风格的硬直角阴影和轻微的环境阴影
        paper: '0 4px 20px rgba(42, 40, 37, 0.03)',
        'hard-hover': '4px 4px 0px var(--tw-shadow-color)',
        'hard-sm': '2px 2px 0px var(--tw-shadow-color)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: [],
}
