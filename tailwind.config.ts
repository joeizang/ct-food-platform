import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
    colors: {
      'tulip-tree': {
        '50': '#fefaec',
        '100': '#fcf0c9',
        '200': '#f9e08e',
        '300': '#f6ca53',
        '400': '#f4b52e',
        '500': '#ed9313',
        '600': '#d26f0d',
        '700': '#ae4e0f',
        '800': '#8e3c12',
        '900': '#753212',
        '950': '#431905',
      },
      'seance': {
        '50': '#fef3ff',
        '100': '#fbe6ff',
        '200': '#f7ccff',
        '300': '#f6a4ff',
        '400': '#f16eff',
        '500': '#e538fd',
        '600': '#cc17e2',
        '700': '#ad0fbc',
        '800': '#900f99',
        '900': '#76127b',
        '950': '#510054',
      },
      'guardsman-red': {
        '50': '#ffefef',
        '100': '#ffdcdc',
        '200': '#ffbfbf',
        '300': '#ff9392',
        '400': '#ff5554',
        '500': '#ff201f',
        '600': '#ff0100',
        '700': '#db0100',
        '800': '#ba0100',
        '900': '#940908',
        '950': '#520000',
      },
    }
  },
  plugins: [],
} satisfies Config;
