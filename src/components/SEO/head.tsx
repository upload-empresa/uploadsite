/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head"

interface HeaderProps {
    title: string
    description: string

}

export function Header({ title, description }: HeaderProps) {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <title>{title} - Sua empresa sempre um passo à frente</title>
            <meta name='description' content={`${description}`} />
        </Head>)
}