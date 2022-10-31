/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}", "./public/*/*.html"],
  theme: {
    minWidth: {
        '7/10': '70%'
    },
    extend: {
        colors: {
            'white-gold' : '#fff9e8',
            'off-grey' : '#6b7280',
            'form-grey' : '#e5e7eb',
            'button' : '#e3e3e3bf'
        },
        height: {
            '150px' : '150px'
        },
        zIndex: {
            "neg1" : '-1'
        },
        padding: {
            '1/2': '50%',
            '3/4' : '75%',
            full: '100%',
        },
        aspectRatio: {
            square: '1 / 1',
        },
        keyframes: {
            slide: {
              '0%, 100%': { transform: 'translateX(100%)', transform: 'translateX(0%)' },
            }
        },
        animation: {
            slide: 'slide 1s ease-in-out',
        },
    },
  },
  variants: {
    extend: {}
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
