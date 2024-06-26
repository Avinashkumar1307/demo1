import net from './assets/net.png';
import battery from './assets/battery.png';
import wifi from './assets/wifi.png';
import bell from './assets/bell.png';
import profile from './assets/profile.png';
import heart from './assets/heart.png';

export default function App() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[390px]">
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
              <div>Good Morning</div>
              <div>Lorem ipsum</div>
            </div>
          </div>
          <div className='flex gap-4'>
            <div>
              <img src={bell} alt='bell' />
              <img src={heart} alt='heart' />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}