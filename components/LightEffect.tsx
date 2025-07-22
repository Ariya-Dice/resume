// components/LightEffect.tsx

"use client";

import { useState, useEffect, useRef, useCallback } from 'react'; // Import useCallback

// Helper function to create simple paths for characters
const getPathForChar = (char: string, scale: number = 1) => {
  const paths: { [key: string]: { dx: number; dy: number }[] } = {
    'N': [
      { dx: 0, dy: -60 * scale }, // Up (from base of N)
      { dx: 40 * scale, dy: 60 * scale }, // Diagonal down-right
      { dx: 0, dy: -60 * scale }, // Up
    ],
    'O': [
      { dx: 20 * scale, dy: 0 }, // Right
      { dx: 10 * scale, dy: 20 * scale }, // Down-right
      { dx: -10 * scale, dy: 20 * scale }, // Down-left
      { dx: -20 * scale, dy: 0 }, // Left
      { dx: -10 * scale, dy: -20 * scale }, // Up-left
      { dx: 10 * scale, dy: -20 * scale }, // Up-right (completes circle)
    ],
    'D': [
      { dx: 0, dy: -60 * scale }, // Up (from base of D)
      { dx: 30 * scale, dy: -20 * scale }, // Right and Up
      { dx: 10 * scale, dy: 40 * scale }, // Right and Down
      { dx: -40 * scale, dy: 40 * scale }, // Left
      { dx: 0 * scale, dy: -40 * scale }, // Up
    ],
    'E': [
      { dx: 0, dy: -60 * scale }, // Up (from base of E)
      { dx: 40 * scale, dy: 0 }, // Top bar
      { dx: -40 * scale, dy: 0 },
      { dx: 0, dy: 30 * scale }, // Middle bar (move down)
      { dx: 40 * scale, dy: 0 },
      { dx: -40 * scale, dy: 0 },
      { dx: 0, dy: 30 * scale }, // Bottom bar (move down)
      { dx: 40 * scale, dy: 0 },
    ],
    '.': [
      { dx: 0, dy: 0 }, // Small dot
    ],
    'J': [
      { dx: 0, dy: -60 * scale }, // Up (from base of J)
      { dx: 0, dy: 40 * scale }, // Down
      { dx: 20 * scale, dy: 20 * scale }, // Bottom curve
      { dx: -40 * scale, dy: 0 }, // Left
    ],
    'S': [
      { dx: 30 * scale, dy: 0 }, // Right
      { dx: 10 * scale, dy: 20 * scale }, // Down-right
      { dx: -30 * scale, dy: 20 * scale }, // Left and down
      { dx: -10 * scale, dy: 20 * scale }, // Down-left
      { dx: 30 * scale, dy: 0 }, // Right
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
  const [isDrawing, setIsDrawing] = useState(true);
  const [pointColor, setPointColor] = useState<string>(getRandomColor());
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());
  const pathIndexRef = useRef<number>(0);
  // Removed charIndexRef as it was unused and redundant

  const word = "NODE.JS";
  const LETTER_SPACING = 50;
  const DRAWING_SPEED = 800;
  const SCALE = 1;

  const POINT_SIZE = 5;
  const TRAIL_LENGTH = 100;
  const BASE_SPEED = 400;
  const SPEED_VARIATION = 300;
  const ANGLE_CHANGE_INTERVAL = 500;
  const lastAngleChangeRef = useRef<number>(0);
  const lastColorChangeRef = useRef<number>(0);
  const COLOR_CHANGE_INTERVAL = 2000;

  const fullDrawingPath = useRef<{ dx: number; dy: number }[]>([]);
  const startDrawingPosition = useRef({ x: 0, y: 0 });

  // Wrapped animate in useCallback to stabilize it for useEffect dependency
  const animate = useCallback((time: number) => {
    const deltaTime = (time - lastTimeRef.current) / 1000;
    lastTimeRef.current = time;

    if (time - lastColorChangeRef.current > COLOR_CHANGE_INTERVAL) {
      setPointColor(getRandomColor());
      lastColorChangeRef.current = time;
    }

    if (isDrawing) {
      if (pathIndexRef.current < fullDrawingPath.current.length) {
        const segment = fullDrawingPath.current[pathIndexRef.current];
        const segmentDx = segment.dx;
        const segmentDy = segment.dy;

        const currentSegmentLength = Math.sqrt(segmentDx * segmentDx + segmentDy * segmentDy);
        
        // Changed let to const
        const distanceToCoverThisFrame = DRAWING_SPEED * deltaTime;

        if (currentSegmentLength === 0) {
            setPosition(prevPos => ({
                x: prevPos.x + segmentDx,
                y: prevPos.y + segmentDy,
            }));
            pathIndexRef.current++;
        } else {
            // Changed let to const
            const coveredDistanceInSegment = Math.sqrt(
                (position.x - (startDrawingPosition.current.x + fullDrawingPath.current.slice(0, pathIndexRef.current).reduce((sum, s) => sum + s.dx, 0)))**2 +
                (position.y - (startDrawingPosition.current.y + fullDrawingPath.current.slice(0, pathIndexRef.current).reduce((sum, s) => sum + s.dy, 0)))**2
            );

            // Changed let to const
            const remainingDistanceInSegment = currentSegmentLength - coveredDistanceInSegment;

            if (distanceToCoverThisFrame >= remainingDistanceInSegment) {
                setPosition(prevPos => ({
                    x: prevPos.x + segmentDx - (position.x - (startDrawingPosition.current.x + fullDrawingPath.current.slice(0, pathIndexRef.current).reduce((sum, s) => sum + s.dx, 0))),
                    y: prevPos.y + segmentDy - (position.y - (startDrawingPosition.current.y + fullDrawingPath.current.slice(0, pathIndexRef.current).reduce((sum, s) => sum + s.dy, 0))),
                }));
                pathIndexRef.current++;
            } else {
                const ratio = distanceToCoverThisFrame / currentSegmentLength;
                setPosition(prevPos => ({
                    x: prevPos.x + segmentDx * ratio,
                    y: prevPos.y + segmentDy * ratio,
                }));
            }
        }
        setVelocity({ dx: segmentDx, dy: segmentDy });

      } else {
        setIsDrawing(false);
        const startAngle = Math.random() * 2 * Math.PI;
        const initialSpeed = BASE_SPEED + Math.random() * SPEED_VARIATION;
        setVelocity({
          dx: Math.cos(startAngle) * initialSpeed,
          dy: Math.sin(startAngle) * initialSpeed,
        });
        lastAngleChangeRef.current = time;
      }
    } else {
      // Changed let to const
      const currentVelocity = { ...velocity };

      if (time - lastAngleChangeRef.current > ANGLE_CHANGE_INTERVAL) {
        const angles = [
          Math.PI / 4, -Math.PI / 4, Math.PI / 2, -Math.PI / 2, Math.PI, 0
        ];
        const angleChange = angles[Math.floor(Math.random() * angles.length)];
        const currentAngle = Math.atan2(currentVelocity.dy, currentVelocity.dx);
        const newAngle = currentAngle + angleChange;
        
        let newSpeed = BASE_SPEED + Math.random() * SPEED_VARIATION;

        const MIN_SPEED = BASE_SPEED / 2;
        const MAX_SPEED = BASE_SPEED + SPEED_VARIATION + 100;
        if (newSpeed > MAX_SPEED) newSpeed = MAX_SPEED;
        if (newSpeed < MIN_SPEED) newSpeed = MIN_SPEED;
        
        currentVelocity.dx = Math.cos(newAngle) * newSpeed;
        currentVelocity.dy = Math.sin(newAngle) * newSpeed;
        
        lastAngleChangeRef.current = time;
      }

      setPosition(prevPos => {
        let newX = prevPos.x + currentVelocity.dx * deltaTime;
        let newY = prevPos.y + currentVelocity.dy * deltaTime;

        let bounced = false;
        if (newX <= 0) {
          newX = 0;
          currentVelocity.dx = Math.abs(currentVelocity.dx);
          bounced = true;
        } else if (newX >= window.innerWidth - POINT_SIZE) {
          newX = window.innerWidth - POINT_SIZE;
          currentVelocity.dx = -Math.abs(currentVelocity.dx);
          bounced = true;
        }
        
        if (newY <= 0) {
          newY = 0;
          currentVelocity.dy = Math.abs(currentVelocity.dy);
          bounced = true;
        } else if (newY >= window.innerHeight - POINT_SIZE) {
          newY = window.innerHeight - POINT_SIZE;
          currentVelocity.dy = -Math.abs(currentVelocity.dy);
          bounced = true;
        }

        if (bounced) {
          setVelocity(currentVelocity);
        }

        return { x: newX, y: newY };
      });
    }

    requestRef.current = requestAnimationFrame(animate);
  }, [
    isDrawing, setPosition, setVelocity, setPointColor, velocity, // Add these dependencies to useCallback
    BASE_SPEED, SPEED_VARIATION, ANGLE_CHANGE_INTERVAL, COLOR_CHANGE_INTERVAL,
    DRAWING_SPEED, POINT_SIZE, SCALE, // Add these constants as dependencies
    fullDrawingPath, pathIndexRef, startDrawingPosition, lastAngleChangeRef, lastColorChangeRef,
  ]); // Add required dependencies for useCallback

  useEffect(() => {
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;

    const totalWordWidth = word.split('').reduce((acc, char, index) => {
        const charWidth = (char === '.' ? 10 : 40) * SCALE;
        return acc + charWidth + (index < word.length - 1 ? LETTER_SPACING : 0);
    }, 0);
    currentX -= totalWordWidth / 2;
    currentY -= (60 * SCALE) / 2;

    startDrawingPosition.current = { x: currentX, y: currentY };
    setPosition({ x: currentX, y: currentY });

    word.split('').forEach(char => {
      const charPath = getPathForChar(char, SCALE);

      if (['N', 'D', 'E', 'J', 'S'].includes(char)) {
          fullDrawingPath.current.push({ dx: 0, dy: 60 * SCALE });
      } else if (char === 'O') {
          fullDrawingPath.current.push({ dx: 0, dy: 30 * SCALE });
      }

      fullDrawingPath.current.push(...charPath);

      fullDrawingPath.current.push({ dx: LETTER_SPACING, dy: 0 });
    });

    pathIndexRef.current = 0;
    lastTimeRef.current = performance.now();

    requestRef.current = requestAnimationFrame(animate); // This now refers to the useCallback-wrapped animate

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate, word, LETTER_SPACING, SCALE, setPosition]); // Add animate and other constants as dependencies

  const angleDeg = Math.atan2(velocity.dy, velocity.dx) * 180 / Math.PI;

  const trailStyle = {
    width: `${POINT_SIZE}px`,
    height: `${POINT_SIZE}px`,
    left: `${position.x}px`,
    top: `${position.y}px`,
    position: 'fixed',
    borderRadius: '50%',
    backgroundColor: pointColor,
    boxShadow: `0 0 15px 5px ${pointColor.replace('0.8)', '0.5)')}, 0 0 25px 10px ${pointColor.replace('0.8)', '0.3)')}`,
    transform: `translate(-50%, -50%)`,
    '--angle': `${angleDeg + 180}deg`,
    '--trail-length': `${TRAIL_LENGTH}px`,
    transition: isDrawing ? 'none' : 'transform 0.1s linear',
    zIndex: 9999
  } as React.CSSProperties;

  return <div style={trailStyle} className="light-point" />;
};

export default LightEffect;