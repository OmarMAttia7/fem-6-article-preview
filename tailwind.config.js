module.exports = {
    content: ["./src/**/*.{html,js}"],

    theme: {

        colors: {

            'grayblue': {
                100: 'hsl(210, 46%, 95%)',
                200: 'hsl(212, 23%, 69%)',
                300: 'hsl(217, 19%, 35%)'
            },
    
            'darkblue': 'hsl(214, 17%, 51%)',

            'white': 'hsl(255, 100%, 100%)'
        },

        extend: {

            backgroundImage: {
                'hero': 'url(./images/drawers.jpg)'
            },

            fontFamily: {
                'main': ['Manrope', 'Arial', 'Helvetica', 'sans-serif'],
            }

        },

    },

    plugins: [

    ],
}