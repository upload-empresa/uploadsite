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
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
            <title>{title} - Sua empresa sempre um passo à frente</title>
            <meta name='description' content={`${description}`} />
        </Head>
    )
}