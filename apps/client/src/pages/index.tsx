import type { NextPage } from 'next'
import { useTheme } from 'next-themes'

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className='flex flex-col gap-4 w-[%100] m-5'>
        <h1 className='text-black dark:text-white text-3xl text-center'>Hello world!</h1>
        <button className='p-2 rounded-lg border' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Theme</button>
      </div>
    </>
  )
}

export default Home
