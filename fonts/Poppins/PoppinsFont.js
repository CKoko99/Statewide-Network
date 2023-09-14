
import localFont from '@next/font/local'


const Poppins = localFont({
    src: [
        {
            path: './Poppins-Black.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: './Poppins-Medium.ttf',
            weight: '500',
            style: 'normal'
        }
    ]
})


export default [
    Poppins
]