import net from './assets/net.png';
import battery from './assets/battery.png';
import wifi from './assets/wifi.png';
import bell from './assets/bell.png';
import profile from './assets/profile.png';
import heart from './assets/heart.png';
import offer from './assets/offer.png';
import shoes from './assets/shoes.png';
import clothe from './assets/clothe.png';
import bag from './assets/bag.png';
import gril from './assets/gril.png';
import './App.css'
import Navbar from './Navbar';
export default function App() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[390px] flex flex-col items-center border-2">
        <div className="w-[339.66px] h-[12px] flex justify-between items-center my-[12px]">
          {/* Left side */}
          <div className='w-[54px] h-[21px] font-bold'>
            9:41
          </div>
          {/* Right side */}
          <div className='flex w-[66.66px] h-[11.34px] justify-between'>
            <img src={net} alt='net' />
            <img src={wifi} alt='net' />
            <img src={battery} alt='net' />

          </div>

        </div>
        <div className='w-[360px] h-[52px] flex justify-between items-center my-5'>
          <div className='flex'>
            <div className='w-[52px] h-[52px] rounded-full bg-red-600'>
              <img src={profile} alt='profile' />
            </div>
            <div className=''>
              <div className='ml-4 font-sans text-base font-normal leading-[1.21] text-left'>Good Morning</div>
              <div className='text-[18px] font-bold ml-4'>Lorem ipsum</div>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='flex gap-4'>
              <img src={bell} alt='bell' className='w-[24px] h-[24px]' />
              <img src={heart} alt='heart' className='w-[24px] h-[24px]' />
            </div>
          </div>

        </div>
        <div className='w-[352px] bg-[#EEEEEE] rounded-xl bottom-2'>
          <div class='max-w-md mx-auto bottom-2 bg-[#EEEEEE]'>
            <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div class="grid place-items-center h-full w-12 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.." />
            </div>
          </div>
        </div>
        <div className='w-[351px] h-[22px] flex justify-between'>
          <div className='text-[#232323] text-[18px] font-bold'>Special Offers</div>
          <div className='text-[#FC6C85] font-bold text-[16px]'>See All</div>
        </div>
        <div className='w-[351px] h-[137px] flex justify-between bgcolor rounded-3xl border-[2px] border-[#FC6C85] my-5'>
          <div className='flex flex-col items-start justify-center ml-5'>
            <div className='text-[30px] text-[#FC6C85] font-bold'>
              30%
            </div>
            <div className='text-[#FC6C85] text-[16px] font-bold'>Today’s Special!</div>
            <div className='text-[#FC6C85] text-[10px] mt-3'>Get discount for every<br />
              order, only valid for today</div>
          </div>
          <div>
            <img src={offer} alt='offer' className='h-[133px] mr-4' />
          </div>
        </div>
        <div className='w-[299px] h-[94px] flex justify-between'>
          <div className='w-[64px] h-[94px]'>
            <div className='w-[65px] h-[65px] rounded-full bgcolor flex justify-center items-center'>
              <img src={bag} alt='bag' />
            </div>
            <div className='text-[#303030] text-[16px] font-semibold text-center'>Clothes</div>
          </div>
          <div className='w-[64px] h-[94px]'>
            <div className='w-[65px] h-[65px] rounded-full bgcolor flex justify-center items-center'>
              <img src={clothe} alt='bag' />
            </div>
            <div className='text-[#303030] text-[16px] font-semibold text-center'>Shoes</div>
          </div>
          <div className='w-[64px] h-[94px]'>
            <div className='w-[65px] h-[65px] rounded-full bgcolor flex justify-center items-center'>
              <img src={shoes} alt='bag' />
            </div>
            <div className='text-[#303030] text-[16px] font-semibold text-center'>Bags</div>
          </div>
        </div>
        <div className='w-[340px] h-[22px] flex justify-between my-5'>
          <div className='text-[#232323] text-[18px] font-bold'> Most Popular</div>
          <div className='text-[#FC6C85] font-bold text-[16px]'>See All</div>
        </div>
        <div className='w-[367px] flex justify-between'>
          <div className='py-2 px-4 border-2 rounded-3xl bg-[#FC6C85]'> All</div>
          <div className='py-2 px-4 border-2 rounded-3xl'> Clothes</div>
          <div className='py-2 px-4 border-2 rounded-3xl'> Shoes</div>
          <div className='py-2 px-4 border-2 rounded-3xl'> Bags</div>

        </div>
        <div className='flex gap-5 mt-5'>
          <div>
            <img src={gril} alt='gril' />
          </div>
          <div>
            <img src={gril} alt='gril' />
          </div>

        </div>
        <Navbar/>
      </div>

    </div>
  )
}