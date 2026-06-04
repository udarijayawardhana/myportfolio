/**
 * Timeline SVG path draw-on-scroll animation.
 */
export function initTimeline() {
  const tl = document.getElementById('timeline');
  if (tl) {
    const path = tl.querySelector('svg.line path');
    const setLen = () => {
      const len = tl.offsetHeight;
      path.style.setProperty('--len', len);
      path.setAttribute('d', `M1 0 L1 ${len}`);
      tl.querySelector('svg.line').setAttribute('viewBox', `0 0 2 ${len}`);
      tl.querySelector('svg.line').style.height = len + 'px';
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
    };
    setLen();
    addEventListener('resize', setLen);

    const draw = () => {
      const r = tl.getBoundingClientRect();
      const vh = innerHeight;
      const total = r.height + vh * 0.4;
      const passed = Math.min(Math.max(vh * 0.7 - r.top, 0), total);
      const len = tl.offsetHeight;
      path.style.strokeDashoffset = Math.max(0, len - (passed / total) * len);
    };
    addEventListener('scroll', draw, { passive: true });
    draw();
  }
}
