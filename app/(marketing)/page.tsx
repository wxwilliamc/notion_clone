import Footer from "./_components/Footer"
import HeadingCom from "./_components/Heading"
import HeroesCom from "./_components/Heroes"

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <HeadingCom />
        <HeroesCom />
      </div>
    </div>
  )
}

export default MarketingPage