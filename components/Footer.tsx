// components/Footer.tsx
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="relative w-full -mt-6 z-[100]">
        <section id="community" className="w-full bg-purple-600 text-white rounded-t-3xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
                <div className="flex justify-center items-center space-x-6">
                    <a href="https://x.com/chromecoin_fun" className="font-bold text-lg hover:underline flex flex-col items-center gap-2">
                        TWITTER
                    </a>
                </div>
            </div>
        </section>
        <div>
          {/* Divider */}
          <div className="w-full bg-purple-600 px-10 mx-auto">
            <div className="h-[2px] bg-zinc-300"></div>
            <div className="bg-purple-600 py-4 flex flex-col sm:flex-row justify-between items-center text-white">
              <p className="mt-2 sm:mt-0 text-xs">&copy; {new Date().getFullYear()} $CHROME. All Rights Reserved.</p>
              <p className="text-xs tracking-wider ">This site and token are not financial advice.</p>
            </div>
          </div>
          </div>
        </footer>
    );
}