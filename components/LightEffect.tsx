// components/LightEffect.tsx

"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// Helper function to create simple paths for characters
const getPathForChar = (char: string, scale: number = 1) => {
  const paths: { [key: string]: { dx: number; dy: number }[] } = {
    N: [
      { dx: 0, dy: -60 * scale },
      { dx: 40 * scale, dy: 60 * scale },
      { dx: 0, dy: -60 * scale },
    ],
    O: [
      { dx: 20 * scale, dy: 0 },
      { dx: 10 * scale, dy: 20 * scale },
      { dx: -10 * scale, dy: 20 * scale },
      { dx: -20 * scale, dy: 0 },
      { dx: -10 * scale, dy: -20 * scale },
      { dx: 10 * scale, dy: -20 * scale },
    ],
    D: [
      { dx: 0, dy: -60 * scale },
      { dx: 30 * scale, dy: -20 * scale },
      { dx: 10 * scale, dy: 40 * scale },
      { dx: -40 * scale, dy: 40 * scale },
      { dx: 0, dy: -40 * scale },
    ],
    E: [
      { dx: 0, dy: -60 * scale },
      { dx: 40 * scale, dy: 0 },
      { dx: -40 * scale, dy: 0 },
      { dx: 0, dy: 30 * scale },
      { dx: 40 * scale, dy: 0 },
      { dx: -40 * scale, dy: 0 },
      { dx: 0, dy: 30 * scale },
      { dx: 40 * scale, dy: 0 },
    ],
    ".": [
      { dx: 0, dy: 0 },
    ],
    J: [
      { dx: 0, dy: -60 * scale },
      { dx: 0, dy: 40 * scale },
      { dx: 20 * scale, dy: 20 * scale },
      { dx: -40 * scale, dy: 0 },
    ],
    S: [
      { dx: 30 * scale, dy: 0 },
      { dx: 10 * scale, dy: 20 * scale },
      { dx: -30 * scale, dy: 20 * scale },
      { dx: -10 * scale, dy: 20 * scale },
      { dx: 30 * scale, dy: 0 },
    ],
  };

  return paths[char] || [];
};

// Helper function to generate a random RGBA color
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgba(${r}, ${g}, ${b}, 0.8)`;
};

const LightEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ dx: 0, dy: 0 });
  const [pointColor, setPointColor] = useState<string>(getRandomColor());

  const requestRef = useRef<number | null>(null);

  const lastTimeRef = useRef<number>(0);

  const positionRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ dx: 0, dy: 0 });

  const isDrawingRef = useRef(true);

  const pathIndexRef = useRef<number>(0);
  const segmentProgressRef = useRef<number>(0);

  const fullDrawingPath = useRef<{ dx: number; dy: number }[]>([]);
  const startDrawingPosition = useRef({ x: 0, y: 0 });

  const lastAngleChangeRef = useRef<number>(0);
  const lastColorChangeRef = useRef<number>(0);

  const word = "NODE.JS";
  const LETTER_SPACING = 50;
  const DRAWING_SPEED = 800;
  const SCALE = 1;

  const POINT_SIZE = 5;
  const TRAIL_LENGTH = 100;
  const BASE_SPEED = 400;
  const SPEED_VARIATION = 300;
  const ANGLE_CHANGE_INTERVAL = 500;
  const COLOR_CHANGE_INTERVAL = 2000;

  const updatePosition = useCallback((nextPosition: { x: number; y: number }) => {
    positionRef.current = nextPosition;
    setPosition(nextPosition);
  }, []);

  const updateVelocity = useCallback((nextVelocity: { dx: number; dy: number }) => {
    velocityRef.current = nextVelocity;
    setVelocity(nextVelocity);
  }, []);

  const animate = useCallback(
    (time: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const deltaTime = Math.min(
        (time - lastTimeRef.current) / 1000,
        0.05
      );

      lastTimeRef.current = time;

      if (
        time - lastColorChangeRef.current >
        COLOR_CHANGE_INTERVAL
      ) {
        setPointColor(getRandomColor());
        lastColorChangeRef.current = time;
      }

      if (isDrawingRef.current) {
        const path = fullDrawingPath.current;
        const pathIndex = pathIndexRef.current;

        if (pathIndex < path.length) {
          const segment = path[pathIndex];

          const segmentDx = segment.dx;
          const segmentDy = segment.dy;

          const segmentLength = Math.sqrt(
            segmentDx * segmentDx + segmentDy * segmentDy
          );

          if (segmentLength === 0) {
            pathIndexRef.current += 1;
            segmentProgressRef.current = 0;
          } else {
            const distanceToCover =
              DRAWING_SPEED * deltaTime;

            const remainingDistance =
              segmentLength - segmentProgressRef.current;

            if (distanceToCover >= remainingDistance) {
              const nextPosition = {
                x:
                  positionRef.current.x +
                  segmentDx -
                  (segmentDx / segmentLength) *
                    segmentProgressRef.current,

                y:
                  positionRef.current.y +
                  segmentDy -
                  (segmentDy / segmentLength) *
                    segmentProgressRef.current,
              };

              updatePosition(nextPosition);

              pathIndexRef.current += 1;
              segmentProgressRef.current = 0;
            } else {
              const ratio =
                distanceToCover / segmentLength;

              segmentProgressRef.current += distanceToCover;

              const nextPosition = {
                x:
                  positionRef.current.x +
                  segmentDx * ratio,

                y:
                  positionRef.current.y +
                  segmentDy * ratio,
              };

              updatePosition(nextPosition);
            }
          }

          updateVelocity({
            dx: segmentDx,
            dy: segmentDy,
          });
        } else {
          isDrawingRef.current = false;

          const startAngle =
            Math.random() * 2 * Math.PI;

          const initialSpeed =
            BASE_SPEED +
            Math.random() * SPEED_VARIATION;

          const nextVelocity = {
            dx: Math.cos(startAngle) * initialSpeed,
            dy: Math.sin(startAngle) * initialSpeed,
          };

          updateVelocity(nextVelocity);

          lastAngleChangeRef.current = time;
        }
      } else {
        const currentVelocity = {
          ...velocityRef.current,
        };

        if (
          time - lastAngleChangeRef.current >
          ANGLE_CHANGE_INTERVAL
        ) {
          const angles = [
            Math.PI / 4,
            -Math.PI / 4,
            Math.PI / 2,
            -Math.PI / 2,
            Math.PI,
            0,
          ];

          const angleChange =
            angles[
              Math.floor(Math.random() * angles.length)
            ];

          const currentAngle = Math.atan2(
            currentVelocity.dy,
            currentVelocity.dx
          );

          const newAngle =
            currentAngle + angleChange;

          let newSpeed =
            BASE_SPEED +
            Math.random() * SPEED_VARIATION;

          const MIN_SPEED = BASE_SPEED / 2;
          const MAX_SPEED =
            BASE_SPEED + SPEED_VARIATION + 100;

          if (newSpeed > MAX_SPEED) {
            newSpeed = MAX_SPEED;
          }

          if (newSpeed < MIN_SPEED) {
            newSpeed = MIN_SPEED;
          }

          currentVelocity.dx =
            Math.cos(newAngle) * newSpeed;

          currentVelocity.dy =
            Math.sin(newAngle) * newSpeed;

          lastAngleChangeRef.current = time;
        }

        let newX =
          positionRef.current.x +
          currentVelocity.dx * deltaTime;

        let newY =
          positionRef.current.y +
          currentVelocity.dy * deltaTime;

        let bounced = false;

        if (newX <= 0) {
          newX = 0;
          currentVelocity.dx =
            Math.abs(currentVelocity.dx);
          bounced = true;
        } else if (
          newX >=
          window.innerWidth - POINT_SIZE
        ) {
          newX =
            window.innerWidth - POINT_SIZE;

          currentVelocity.dx =
            -Math.abs(currentVelocity.dx);

          bounced = true;
        }

        if (newY <= 0) {
          newY = 0;
          currentVelocity.dy =
            Math.abs(currentVelocity.dy);

          bounced = true;
        } else if (
          newY >=
          window.innerHeight - POINT_SIZE
        ) {
          newY =
            window.innerHeight - POINT_SIZE;

          currentVelocity.dy =
            -Math.abs(currentVelocity.dy);

          bounced = true;
        }

        if (bounced) {
          updateVelocity(currentVelocity);
        } else {
          velocityRef.current = currentVelocity;
        }

        updatePosition({
          x: newX,
          y: newY,
        });
      }

      requestRef.current =
        requestAnimationFrame(animate);
    },
    [
      updatePosition,
      updateVelocity,
    ]
  );

  useEffect(() => {
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;

    const totalWordWidth = word
      .split("")
      .reduce((acc, char, index) => {
        const charWidth =
          (char === "." ? 10 : 40) * SCALE;

        return (
          acc +
          charWidth +
          (index < word.length - 1
            ? LETTER_SPACING
            : 0)
        );
      }, 0);

    currentX -= totalWordWidth / 2;
    currentY -= (60 * SCALE) / 2;

    startDrawingPosition.current = {
      x: currentX,
      y: currentY,
    };

    const initialPosition = {
      x: currentX,
      y: currentY,
    };

    positionRef.current = initialPosition;
    setPosition(initialPosition);

    // Clear the previous path before building it again.
    fullDrawingPath.current = [];

    word.split("").forEach((char) => {
      const charPath = getPathForChar(
        char,
        SCALE
      );

      if (
        ["N", "D", "E", "J", "S"].includes(char)
      ) {
        fullDrawingPath.current.push({
          dx: 0,
          dy: 60 * SCALE,
        });
      } else if (char === "O") {
        fullDrawingPath.current.push({
          dx: 0,
          dy: 30 * SCALE,
        });
      }

      fullDrawingPath.current.push(
        ...charPath
      );

      fullDrawingPath.current.push({
        dx: LETTER_SPACING,
        dy: 0,
      });
    });

    pathIndexRef.current = 0;
    segmentProgressRef.current = 0;

    isDrawingRef.current = true;

    velocityRef.current = {
      dx: 0,
      dy: 0,
    };

    setVelocity({
      dx: 0,
      dy: 0,
    });

    lastTimeRef.current = performance.now();
    lastAngleChangeRef.current =
      lastTimeRef.current;
    lastColorChangeRef.current =
      lastTimeRef.current;

    requestRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(
          requestRef.current
        );

        requestRef.current = null;
      }
    };
  }, [animate]);

  const angleDeg =
    Math.atan2(
      velocity.dy,
      velocity.dx
    ) *
    (180 / Math.PI);

  const trailStyle = {
    width: `${POINT_SIZE}px`,
    height: `${POINT_SIZE}px`,
    left: `${position.x}px`,
    top: `${position.y}px`,
    position: "fixed" as const,
    borderRadius: "50%",
    backgroundColor: pointColor,
    boxShadow: `
      0 0 15px 5px ${pointColor.replace(
        "0.8)",
        "0.5)"
      )},
      0 0 25px 10px ${pointColor.replace(
        "0.8)",
        "0.3)"
      )}
    `,
    transform: "translate(-50%, -50%)",
    "--angle": `${angleDeg + 180}deg`,
    "--trail-length": `${TRAIL_LENGTH}px`,
    transition: isDrawingRef.current
      ? "none"
      : "transform 0.1s linear",
    zIndex: 9999,
  } as React.CSSProperties;

  return (
    <div
      style={trailStyle}
      className="light-point"
    />
  );
};

export default LightEffect;