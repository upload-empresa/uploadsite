/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head"

interface HeaderProps {
    title: string
    description: string

}

export function Header({ title, description }: HeaderProps) {
    return (
            <Head>
                <title>{title} - Sua empresa sempre um passo à frente</title>
                <meta name='description' content={`${description}`} />
            </Head>
        )
}