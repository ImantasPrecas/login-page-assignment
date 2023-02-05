import {
  BgElementBottomRightSVG,
  BgElementTopLeftSVG,
  BgElementBottomLeftSVG,
} from '../../assets/GraphicElements/GraphicElements';

type Props = {};
function Background({}: Props) {
  return (
    <>
      <div>
        <div className='absolute bottom-0 right-0 -z-10'>
          <BgElementBottomRightSVG />
        </div>
        <div className='absolute top-0 left-0 -z-10'>
          <BgElementTopLeftSVG />
        </div>
        <div className='absolute bottom-0 left-0 -z-10'>
          <BgElementBottomLeftSVG />
        </div>
      </div>
    </>
  );
}
export default Background;
