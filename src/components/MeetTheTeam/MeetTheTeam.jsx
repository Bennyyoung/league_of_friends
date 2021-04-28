import { useRef, useEffect, useState } from 'react';
import { useSpring, useTransition, animated, to, config } from '@react-spring/web';
import { useGesture } from 'react-use-gesture';
import imgs from './data';

import styles from './styles.module.css';
import './index.css'

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x, lx) => -(x - lx - window.innerWidth / 2) / 20;

const wheel = y => {
  const imgHeight = window.innerWidth * 0.3 - 20;
  return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`;
};

const slides = [
  'photo-1544511916-0148ccdeb877',
  'photo-1544572571-ab94fd872ce4',
  'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG',
  'photo-1540206395-68808572332f',
];

export const MeetTheTeam = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
  });
  useEffect(() => {
    const t = setInterval(
      () => set(state => (state + 1) % slides.length),
      4000,
    );
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const preventDefault = e => e.preventDefault();
    document.addEventListener('gesturestart', preventDefault);
    document.addEventListener('gesturechange', preventDefault);

    return () => {
      document.removeEventListener('gesturestart', preventDefault);
      document.removeEventListener('gesturechange', preventDefault);
    };
  }, []);

  const domTarget = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    }),
  );

  const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }));

  useGesture(
    {
      onDrag: ({ active, offset: [x, y] }) =>
        api.start({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
      onPinch: ({ offset: [d, a] }) => api.start({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api.start({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api.start({ rotateX: 0, rotateY: 0, scale: 1 }),
      onWheel: ({ event, offset: [, y] }) => {
        event.preventDefault();
        wheelApi.set({ wheelY: y });
      },
    },
    { domTarget, eventOptions: { passive: false } },
  );

  return (
    <>
      {/* <div className="flex fill center">
        {transitions((style, i) => (
          <animated.div
            className={styles.bg}
            style={{
              ...style,
              backgroundImage: `url(https://images.unsplash.com/${slides[i]}?w=1920&q=80&auto=format&fit=crop)`,
            }}
          />
        ))}
      </div> */}
      <h1 style={{ paddingRight: '20px' }}>Meet the Team</h1>

      <div className={styles.container}>
        <animated.div
          ref={domTarget}
          className={styles.card}
          style={{
            transform: 'perspective(600px)',
            x,
            y,
            scale: to([scale, zoom], (s, z) => s + z),
            rotateX,
            rotateY,
            rotateZ,
          }}
        >
          <animated.div style={{ transform: wheelY.to(wheel) }}>
            {imgs.map((img, i) => (
              <>
                <div key={i} style={{ backgroundImage: `url(${img})` }} />
              </>
            ))}
          </animated.div>
        </animated.div>
      </div>
    </>
  );
};
