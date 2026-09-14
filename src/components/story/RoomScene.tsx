import { useSceneProgress } from '../../story/useSceneProgress';
import { seg, easeInOut } from '../../story/helpers';

export function RoomScene() {
  const { ref, progress } = useSceneProgress<HTMLElement>();

  const zoom = 1 + easeInOut(seg(progress, 0.18, 0.96)) * 2.4;
  const captionFade = 1 - seg(progress, 0, 0.22);
  const blackout = seg(progress, 0.9, 1);

  return (
    <section className="scene scene-room" id="home" ref={ref}>
      <div className="scene-pin">
        <div
          className="room"
          style={{ transform: `scale(${zoom})`, transformOrigin: '50% 56%' }}
        >
          <div className="r-stars" />
          <div className="r-window">
            <span className="r-moon" />
            <span className="r-skyline" />
          </div>

          <div className="r-clock">11:47 PM</div>

          <div className="r-lampglow" />

          <div className="r-monitor">
            <div className="r-screen">
              <span className="r-line" style={{ width: '72%' }} />
              <span className="r-line" style={{ width: '48%' }} />
              <span className="r-line" style={{ width: '84%' }} />
              <span className="r-line" style={{ width: '36%' }} />
              <span className="r-line" style={{ width: '64%' }} />
              <span className="r-line" style={{ width: '52%' }} />
              <span className="r-line r-line-cursor" style={{ width: '28%' }} />
            </div>
          </div>
          <div className="r-stand" />

          <div className="r-dev">
            <span className="dev-head" />
            <span className="dev-body" />
            <span className="dev-arm" />
          </div>
          <div className="r-chair" />

          <div className="r-desk" />
          <div className="r-keyboard" />
          <div className="r-mug">
            <span className="r-steam" />
          </div>
        </div>

        <div className="room-caption" style={{ opacity: captionFade }}>
          <p className="rc-kicker">A NIGHT IN THE LIFE OF A DEVELOPER</p>
          <h1 className="rc-name">
            MAHDI <span>ESMAEELNEZHAD</span>
          </h1>
          <p className="rc-role">Senior Frontend Developer · Mashhad, Iran</p>
          <div className="rc-scroll">
            <span className="rc-mouse" />
            scroll to enter the screen
          </div>
        </div>

        <div className="scene-fade" style={{ opacity: blackout }} />
      </div>
    </section>
  );
}
