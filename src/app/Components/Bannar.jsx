export default function Bannar() {
  const bgUrl = '/Images/bannar.jpg'; 
  return (
    <div
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       
      }}
    >
        <div className="px-36 py-60 text-right text-white font-bold">
           <div className="text-5xl text-right text-white font-bold">
             <h1 className="py-2">EDUCATION</h1>
            <h1>NEED FOR BETTER LIFE</h1>
           </div>
            <p className="py-2">Your one-stop solution for reserving college facilities—fast, simple, and stress-free.</p>
            <div className="my-2">
                <button className="bg-[#FF3115] mx-5 py-3 px-5 text-xl ">Get Started Now</button>
                <button className="bg-black py-3 px-5 text-xl ">Read More</button>
            </div>
        </div>
    </div>
  );
}