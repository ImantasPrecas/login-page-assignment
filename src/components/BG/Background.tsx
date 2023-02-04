import {
  BgElementBottomRightSVG,
  BgElementTopLeftSVG,
  BgElementBottomLeftSVG,
} from '../../assets/GraphicElements/GraphicElements';

export default function Background() {
  return (
    <>
      <div>
        {/* BACKGROUND ELEMENTS */}
        {/* BOTTOM RIGHT ELEMENT*/}
        <div className='absolute bottom-0 right-0 -z-10'>
          <BgElementBottomRightSVG />
        </div>
        {/* TOP LEFT ELEMENT */}
        <div className='absolute top-0 left-0 -z-10'>
          <BgElementTopLeftSVG />
        </div>
        {/* BOTTOM LEFT ELEMENT */}
        <div className='absolute bottom-0 left-0 -z-10'>
          <BgElementBottomLeftSVG />
        </div>
      </div>
    </>
  );
}
