export const Footer = () => {
    return (
        <footer className="relative w-full -mt-6 z-[100]">
        <section id="community" className="w-full bg-pixel-green text-white rounded-t-3xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
                <h2 className="text-5xl font-extrabold mb-6">JOIN THE WORLD</h2>
                <p className="max-w-lg mx-auto mb-8 text-white/90">
                    Follow us on our socials to watch our universe expand in real-time. Become a citizen of Pixel World today.
                </p>
                <div className="flex justify-center items-center space-x-6">
                    <a href="#" className="font-bold text-lg hover:underline">TELEGRAM ↗</a>
                    <a href="#" className="font-bold text-lg hover:underline">TWITTER ↗</a>
                    <a href="#" className="font-bold text-lg hover:underline">DISCORD ↗</a>
                </div>
            </div>
        </section>
        <div>
          {/* Divider */}
          <div className="w-full bg-pixel-green px-10 mx-auto">
            <div className="h-[2px] bg-zinc-300"></div>
            <div className="bg-pixel-green py-4 flex flex-col sm:flex-row justify-between items-center text-white">
              <p className="mt-2 sm:mt-0 text-xs">&copy; {new Date().getFullYear()} Pixel World. All Rights Reserved.</p>
              <p className="text-xs tracking-wider ">This site and token are not financial advice.</p>
            </div>
          </div>
          </div>
        </footer>
    );
}