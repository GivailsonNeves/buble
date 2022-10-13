import React, { cloneElement, useEffect, useMemo, useState } from "react";
import "./styles.scss";

interface Props {
  children: React.ReactElement[];
  width?: number | string;
  height?: number | string;
  initialFrame?: number;
  className?: string;
  playing?: boolean;
  loops?: number;
  frameRate?: number;
}

const FrameAnimator: React.FC<Props> = ({
  children,
  className,
  width = 150,
  height = 150,
  playing = false,
  loops = 100,
  initialFrame = 0,
  frameRate = 15,
}) => {
  const [currentFrame, setCurrentFrame] = useState<number>(initialFrame);

  useEffect(() => {
    let intervalCtrl: any;
    let countLoops = 0;
    console.log(countLoops);
    console.log(loops);

    if (playing) {
      intervalCtrl = setInterval(() => {
        setCurrentFrame((current) => {
          const next = current + 1;
          if (next >= children.length) {
            if (countLoops < loops || loops === -1) {
              countLoops++;
              return initialFrame;
            }
            countLoops = 0;
            clearInterval(intervalCtrl);
            return current;
          }
          return next;
        });
      }, 1000 / frameRate);
    }

    return () => clearInterval(intervalCtrl);
  }, [playing, width, height, setCurrentFrame, children, loops, frameRate]);

  const classNameValue = useMemo(() => {
    const classValues = ["app-frame-animator"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <div style={{ width, height }} className={classNameValue}>
      {children.map((child, index) =>
        cloneElement(child, {
          key: index,
          className: index === currentFrame ? "current" : "",
          style: {
            width,
            height,
          },
        })
      )}
    </div>
  );
};

export default FrameAnimator;
