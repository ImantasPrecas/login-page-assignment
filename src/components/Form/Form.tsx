import { PersonIconSVG, KeyIconSVG } from '../../assets/GraphicElements/GraphicElements';

export default function Form() {
  return (
    <div className='flex flex-col justify-center items-center mt-12 w-full'>
      <form action='/' className='w-full'>
        {/* USER NAME OR EMAIL */}
        <div className='relative border rounded-[10px] overflow-hidden h-[50px] w-full mb-5 hover:bg-slate-100/5'>
          <div className='absolute mx-4 mt-2'>
            <PersonIconSVG />
          </div>
          <input
            type='text'
            placeholder='User name or E-mail'
            className='w-full h-full bg-transparent ml-14 text-[18px] font-bold leading-[23px] text-white font-PTSans placeholder:text-white px-2 focus:outline-none'
          />
        </div>
        {/* Password */}
        <div>
          <div className='relative border rounded-[10px] overflow-hidden h-[50px] w-full hover:bg-slate-100/5'>
            <div className='absolute mx-4 mt-2'>
              <KeyIconSVG />
            </div>
            <input
              type='password'
              placeholder='Password'
              className='w-full h-full bg-transparent ml-14 text-[18px] font-bold leading-[23px] text-white font-PTSans placeholder:text-white px-2 focus:outline-none'
            />
          </div>
        </div>
        {/* LOGIN BUTTON */}
        <div className='border-2 border-[#00FF29] rounded-[15px] h-[50px] w-full mt-[53px] overflow-hidden'>
          <button className='w-full h-full text-[18px] font-bold leading-[23px] font-PTSans text-[#00FF29] hover:bg-[#00ff2a44]'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
