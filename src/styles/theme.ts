import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                webkitScrollbarTrack: 'black',
                webkitScrollbar: '12px',
                scrollBehavior: 'smooth',
                bg: '#fafafa',
                color: 'black',
            },
            html: {
                scrollBehavior: 'smooth'
            }
        }
    },
    breakpoints: {
        min: '200px',
        sm: '320px',
        nvl: '375px',
        msm: '425px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        iba: '1536px',
    }
})

