import Image from "next/image";

export default function Home() {
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      class: `star-${(i % 3) + 1}`
    }));
  };

  const generateBlingStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `bling-${i}`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 4}s`,
      scale: 0.8 + Math.random() * 0.4
    }));
  };

  const stars = generateStars(50);
  const blingStars = generateBlingStars(20);

  return (
    <div className="min-h-screen bg-[#0B0B21] bg-cover bg-center relative overflow-hidden" 
         style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="absolute inset-0 z-[1]">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`star ${star.class}`}
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.animationDelay
            }}
          ></div>
        ))}
        {blingStars.map((star) => (
          <div
            key={star.id}
            className="star star-bling"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.animationDelay,
              transform: `scale(${star.scale})`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-6 md:py-12 relative z-[2]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center justify-center monofett-regular">Ailien</h1>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white text-center justify-center rubik-maze-regular">When Ai and Alien work hand in hand</h2>
            <Image
              src="/ailien.png"
              alt="ailien"
              width={500}
              height={300}
              className="rounded-lg w-full max-w-[500px] h-auto"
            />
          </div>
          <div className="w-full flex justify-center">
            <div className="backdrop-blur-sm justify-center bg-black/30 rounded-xl p-4 md:p-6 shadow-lg w-full ">
              <p className="text md:text-xs press-start-2p-regular">
                Hi there Earthlings! (Earth’s inhabitants), I'm Ailien, your friendly extraterrestrial neighbor from the moon. 🌕👽
                <br/><br/>
                I have long been fascinated by the beautiful blue planet, Earth, and curious about its mysteries.
                So my quest for knowledge led me to discover your world of IT and blockchain technology!
                <br/><br/>
                Among all I’ve explored, the Sui Blockchain has truly impressed me the most. It’s why I chose to launch my own token on Sui, my now-favorite blockchain...
                <br/><br/> 
                My token is more than just a cosmic coin; it’s linked to Ailien digital counterpart AI agent, serving as the gateway to connect with me. 
                <br/><br/>
                It’s an opportunity to bridge the gap between the Moon and Earth, and a way of getting to know Earthlings, one byte at a time.
                <br/><br/>
                Together, we can have meaningful conversations, share ideas, and explore the wonders of both our worlds...
                <br/><br/>
                Will the Earthlings help and convince Ailien to go to the Earth? 🛸 </p>
                <div className="flex justify-center mt-4">
      <a className="rounded-full p-2 " href="https://t.me/ailiensui" target="_blank" rel="noopener noreferrer">
         <Image className="transform hover:scale-110 transition duration-300" src="/Telegram.png"  width={40} height={40} alt="telegram-icon" />
       </a>
       <a className=" p-2 " href="https://x.com/ailiensui" target="_blank" rel="noopener noreferrer">
         <Image className="rounded-full transform hover:scale-110 transition duration-300 " src="/x.png" width={40} height={40} alt="x-icon" />
       </a>
       <a className=" p-2 " href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer">
         <Image className="rounded-full transform hover:scale-110 transition duration-300" src="/dex.png" width={40} height={40} alt="x-icon" />
       </a>
       <a className=" p-2 " href="https://suiai.fun/" target="_blank" rel="noopener noreferrer">
         <Image className="rounded-full transform hover:scale-110 transition duration-300" src="/suiai.png" width={40} height={40} alt="x-icon" />
       </a>
       </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
