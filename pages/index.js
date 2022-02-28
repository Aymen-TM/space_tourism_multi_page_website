import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
return (
<div>

  <Head>
    <title>Create Next App</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <main className='h-screen w-full bg-bgm sm:bg-bgt lg:bg-bgd bg-cover object-cover bg-no-repeat bg-center'>
    <Navbar />
    <section className='h-screen flex flex-col items-center'>
      <div className='text-center max-w-xs md:max-w-md f space-y-[16px] md:space-y-[24px]  mt-[112px] md:mt-[202px] md:mx-[159px] '>
        <p className='text-[16px] tracking-[2.7px] md:text-[20px] md:tracking-[3.38px] font-BarlowCondensed text-[#D0D6F9] uppercase'>So, you want to travel to</p>
        <h1 className='text-[80px] leading-[100px] md:text-[150px] uppercase text-white font-bellefair  md:px-[5px]'>Space </h1>
        <p className='text-[15px] leading-[25px] md:leading-[28px] md:text-[16px]  text-[#D0D6F9] md:px-[3px] font-Barlow'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
          of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className='rounded-full h-[150px] w-[150px] md:h-[242px] md:w-[242px] bg-white text-center flex justify-center items-center mt-[81px] md:mt-[156px]'>
        <p className='text-[#0B0D17] font-bellefair tracking-widest text-xl md:tracking-[2px] md:text-[32px]'>EXPLORE</p>
      </div>
    </section>
  </main>
</div>
)
}