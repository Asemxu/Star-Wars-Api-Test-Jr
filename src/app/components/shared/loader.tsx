import Image from 'next/image'

const Loader = () => {
  return ( 
    <div className="loader ">
      <Image
          src="/spinner.webp"
          alt="Loading Data"
          width={24}
          height={24}
          priority
      />
      <h2 className="text-light">Loading</h2>
    </div>
  )
}

export default Loader