import * as Scroll from 'react-scroll';
import upArrow from '../../utils/Icons/upArrow.png';
const ScrollToTop = () => {
  const scroll = Scroll.animateScroll;
  const scrollToTopHandler = () => {
    scroll.scrollToTop();
  };
  return (
    <button
      className="btn btn-error btn-circle transition ease-in   hover:-translate-y-1 hover:scale-110 duration-200 btn-neutral  fixed bottom-4 right-5 z-20"
      onClick={scrollToTopHandler}
    >
      <img src={upArrow} />
    </button>
  );
};

export default ScrollToTop;
