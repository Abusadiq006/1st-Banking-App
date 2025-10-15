import type { Config } from "tailwindcss"


const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "./constants/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                fill: {
                    1: "rgba(255, 255, 255, 0.10)",
                },
                bankGradient: "#0179FE",
                indigo: {
                    500: "#6172F3",
                    700: "#3538CD",
                },
                success: {
                    25: "#F6FEF9",
                    50: "#ECFDF3",
                    100: "#D1FADF",
                    600: "#039855",
                    700: "#027A48",
                    900: "#054F31",
                },
            }
        }
    }
}