import { FaDownload, FaPhoneAlt } from 'react-icons/fa'
import { IoIosPeople, IoIosFlask, IoIosMegaphone, Ioloca } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import blogImg from './assets/blogImg.png'

function App() {
  return (
    <div className="App">
      <main className="w-full">
        <header className="w-full">
          <nav className="flex justify-between py-8 mx-auto items-center bg-[#303030] px-48">
            <div className="rounded-full text-white">
              <h3 className="font-oleo font-bold text-5xl">Mairala</h3>
            </div>
            <div className="space-x-12 flex text-white text-sm font-sans uppercase">
              <a href="#" className="nav-link">
                Home
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#portfolio" className="nav-link">
                Portfolios
              </a>
              <a href="#team" className="nav-link">
                Team
              </a>
              <a href="#blog" className="nav-link">
                Blog
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </nav>
        </header>

        <section className="bg-hero-bg bg-cover bg-blend-multiply bg-black/80 w-full px-48 py-[180px] font-sans">
          <div className="w-fit">
            <p className="uppercase align-left text-2xl mb-4 text-white">
              Grab your copy of
            </p>
            <h1 className="mb-4 text-[66px] text-white uppercase font-semibold leading-[1]">
              The <span className="text-[#7b6c63]">Premium</span> Quality
            </h1>
            <h1 className="mb-4 text-[66px] text-white uppercase font-semibold leading-[1]">
              PSD Template For <span className="text-[#7b6c63]">free</span>
            </h1>
          </div>
          <button className="uppercase bg-white/10 text-white mt-8 px-12 py-6 rounded flex items-center hover:scale-110 duration-150">
            <span className="mr-2">Download</span> <FaDownload />
          </button>
        </section>

        <section className="mt-[80px] text-center px-48 font-sans" id="about">
          <h3 className="uppercase text-[#7b6c63] text-2xl font-semibold mb-8">
            Services we provide
          </h3>
          <p className="text-black text-base mb-[80px]">
            Volutpat wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent{' '}
          </p>
          <div className="flex justify-between">
            <div className="flex justify-center flex-col items-center">
              <span className="mb-4">
                <IoIosPeople className="text-4xl text-[#363636]/60" />
              </span>
              <h3 className="uppercase text-[#363636] mb-4">Consultancy</h3>
              <p className="text-[#949494] text-base">
                Claritas est etiam processus dynaicus qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam{' '}
              </p>
            </div>
            <div className="flex justify-center flex-col items-center">
              <span className="mb-4">
                <IoIosMegaphone className="text-4xl text-[#363636]/60" />
              </span>
              <h3 className="uppercase text-[#363636] mb-4">Marketing</h3>
              <p className="text-[#949494] text-base">
                Claritas est etiam processus dynaicus qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam{' '}
              </p>
            </div>
            <div className="flex justify-center flex-col items-center">
              <span className="mb-4">
                <IoIosFlask className="text-4xl text-[#363636]/60" />
              </span>
              <h3 className="uppercase text-[#363636] mb-4">Research</h3>
              <p className="text-[#949494] text-base">
                Claritas est etiam processus dynaicus qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam{' '}
              </p>
            </div>
          </div>
        </section>
        <section id="blog" className="mt-[80px] text-center px-48 font-sans">
          <h2 className="text-4xl font-semibold uppercase text-[#7b6c63] pb-[50px]">
            Our Blog
          </h2>
          <div className="border-b-8 border-brown mb-[50px] mx-auto w-[80px]" />
          <p className="text-center w-1/2 mx-auto text-[18px] text-[#212121]">
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim
          </p>
          <div>
            <div className="mt-[90px] grid grid-cols-2 gap-8">
              <img src={blogImg} alt="camera" className="object-none" />
              <div className="text-left">
                <p className="text-[#7b6c63] text-base">10 April 2014</p>
                <h4 className="text-2xl text-[#212121] mb-8">
                  Typi non habent claritatem insitam
                </h4>
                <p className="text-base text-[#949494]">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-[50px]">
              <div className="text-right">
                <p className="text-[#7b6c63] text-base">10 April 2014</p>
                <h4 className="text-2xl text-[#212121] mb-8">
                  Typi non habent claritatem insitam
                </h4>
                <p className="text-base text-[#949494]">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui
                </p>
              </div>
              <img src={blogImg} alt="camera" className="object-none" />
            </div>

            <div className="grid grid-cols-2 gap-8 mt-[50px]">
              <img src={blogImg} alt="camera" className="object-none" />
              <div className="text-left">
                <p className="text-[#7b6c63] text-base">10 April 2014</p>
                <h4 className="text-2xl text-[#212121] mb-8">
                  Typi non habent claritatem insitam
                </h4>
                <p className="text-base text-[#949494]">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="mt-[80px] text-center px-48 font-sans bg-[#f5f5f5] flex justify-center"
        >
          <div className="w-full md:w-2/3">
            <h2 className="text-[#7b6c63] font-semibold text-5xl uppercase pt-[90px]">
              Contact
            </h2>
            <div className="mt-[50px] pb-[85px]">
              <form>
                <div className="grid grid-cols-2 gap-12 mb-2">
                  <div className="flex flex-col text-left">
                    <input type="text" placeholder="Name*" />
                  </div>
                  <div className="flex flex-col text-left">
                    <input type="email" placeholder="Email*" />
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <textarea placeholder="Message..." />
                </div>

                <div className="mt-[120px] mb-8 border-b border-[#242424]" />

                <button
                  type="submit"
                  className="border-2 border-[#242424] px-10 py-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="bg-[#222222] w-full px-48 pt-[54px] font-sans text-white grid grid-cols-4 gap-8 pb-8">
          <div className="text-[#949494] text-sm">
            <h3 className="font-bold font-oleo text-5xl text-[#7b6c63] mb-6">
              Mairala
            </h3>
            <p className="mb-6">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore.
            </p>
            <p>
              eugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Nam liber tempor cum soluta{' '}
            </p>
          </div>
          <div>
            <h3 className="text-[#c2c2c2] uppercase text-[18px] font-semibold mb-6">
              Recent Posts
            </h3>
            <div className="pb-8 mb-8 border-b border-[#5f5f5f]">
              <p className="text-[10px] text-[#5f5f5f]">March 30, 2014</p>
              <p className="text-sm text-[#949494]">
                Duis autem vel eum iriure dolor
              </p>
            </div>

            <div className="pb-8 mb-8 border-b border-[#5f5f5f]">
              <p className="text-[10px] text-[#5f5f5f]">March 30, 2014</p>
              <p className="text-sm text-[#949494]">
                Duis autem vel eum iriure dolor
              </p>
            </div>

            <div className="pb-8 mb-8 border-b border-[#5f5f5f]">
              <p className="text-[10px] text-[#5f5f5f]">March 30, 2014</p>
              <p className="text-sm text-[#949494]">
                Duis autem vel eum iriure dolor
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[#c2c2c2] uppercase text-[18px] font-semibold mb-6">
              Twitter Feeds
            </h3>
            <div className="pb-7 mb-8 border-b border-[#5f5f5f]">
              <p className="flex items-center">
                {' '}
                <span className="text-[10px] text-[#5f5f5f] mr-2">
                  March 30, 2014
                </span>
                <span className="text-[#7b6c63] text-sm">@kristianplatt</span>
              </p>
              <p className="text-sm text-[#949494]">Good work buddy</p>
            </div>
            <div className="pb-7 mb-8 border-b border-[#5f5f5f]">
              <p className="flex items-center">
                {' '}
                <span className="text-[10px] text-[#5f5f5f] mr-2">
                  March 30, 2014
                </span>
                <span className="text-[#7b6c63] text-sm">@fasteven</span>
              </p>
              <p className="text-sm text-[#949494]">Good work buddy</p>
            </div>
            <div className="pb-6 mb-8 border-b border-[#5f5f5f]">
              <p className="flex items-center">
                {' '}
                <span className="text-[10px] text-[#5f5f5f] mr-2">
                  March 30, 2014
                </span>
                <span className="text-[#7b6c63] text-sm">@streamer</span>
              </p>
              <p className="text-sm text-[#949494]">Good work buddy</p>
            </div>
          </div>
          <div>
            <h3 className="text-[#c2c2c2] uppercase text-[18px] font-semibold mb-6">
              Our Address
            </h3>
            <p className="text-sm text-[#949494]">
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynamicus,luptatum
              zzril delenit augue duis dolore te feugait nulla facilisi. Nam
              liber tempor cum soluta
            </p>
            <div className="mt-[50px] text-sm text-[#949494]">
              <div className="flex flex-row">
                <IoLocationSharp />
                <p className="ml-2">Moonshine St. 14/05 Light, Jupiter</p>
              </div>
              <div className="flex flex-row">
                <FaPhoneAlt />
                <p className="ml-2">+00 (123) 456 78 90</p>
              </div>
              <div className="flex flex-row">
                <MdEmail />
                <p className="ml-2">first.last@email.com</p>
              </div>
            </div>
          </div>
        </section>
        <footer className="w-full text-center bg-[#1c1c1c] py-6 text-[#595959] text-base">
          <p>©2014 Imran Khan All Rights Reserved</p>
        </footer>
      </main>
    </div>
  )
}

export default App
