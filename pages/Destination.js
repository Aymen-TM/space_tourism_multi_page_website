import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'

function Destination() {
return (
<div>

    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className='h-screen w-full bg-bgm sm:bg-bgt lg:bg-bgd bg-cover bg-no-repeat bg-center'>
        <Navbar />

    </main>
</div>
)
}

export default Destination