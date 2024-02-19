import Link from 'next/link'


const PortfolioButton = () => {
  return (
    <Link
      href="/myCVupdated.pdf" 
      target="_blank"
    >
        <button className="border border-1 border-[#c1ffc1] text-[#c1ffc1] mt-3 p-2 uppercase rounded-md text-[12px] tracking-wider hover:bg-blue-700 hover:border-blue-700 duration-150"data-aos='fade-up'>
          My Portfolio
        </button>
    </Link>
  )
}

export default PortfolioButton
