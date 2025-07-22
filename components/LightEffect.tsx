// components/LightEffect.tsx

"use client";

import { useState, useEffect, useRef } from 'react';

// تابع کمکی برای ایجاد مسیرهای ساده حروف
const getPathForChar = (char: string, startX: number, startY: number, scale: number = 1) => {
  const paths: { [key: string]: { dx: number; dy: number }[] } = {
    'N': [
      { dx: 0, dy: -60 * scale }, // بالا
      { dx: 40 * scale, dy: 60 * scale }, // مورب به پایین و راست
      { dx: 0, dy: -60 * scale }, // بالا
    ],
    'O': [
      { dx: 20 * scale, dy: 0 }, // راست
      { dx: 10 * scale, dy: 20 * scale }, // پایین راست
      { dx: -10 * scale, dy: 20 * scale }, // پایین چپ
      { dx: -20 * scale, dy: 0 }, // چپ
      { dx: -10 * scale, dy: -20 * scale }, // بالا چپ
      { dx: 10 * scale, dy: -20 * scale }, // بالا راست (تکمیل دایره)
    ],
    'D': [
      { dx: 0, dy: -60 * scale }, // بالا
      { dx: 30 * scale, dy: -20 * scale }, // راست و بالا
      { dx: 10 * scale, dy: 40 * scale }, // راست و پایین
      { dx: -40 * scale, dy: 40 * scale }, // چپ
      { dx: 0 * scale, dy: -40 * scale }, // بالا
    ],
    'E': [
      { dx: 0, dy: -60 * scale }, // بالا
      { dx: 40 * scale, dy: 0 }, // سر بالا
      { dx: -40 * scale, dy: 0 },
      { dx: 0, dy: 30 * scale }, // وسط
      { dx: 40 * scale, dy: 0 },
      { dx: -40 * scale, dy: 0 },
      { dx: 0, dy: 30 * scale }, // پایین
      { dx: 40 * scale, dy: 0 },
    ],
    '.': [
      { dx: 0, dy: 0 }, // نقطه کوچک
    ],
    'J': [
      { dx: 0, dy: -60 * scale }, // بالا
      { dx: 0, dy: 40 * scale }, // پایین
      { dx: 20 * scale, dy: 20 * scale }, // خمیدگی پایین
      { dx: -40 * scale, dy: 0 }, // چپ
    ],
    'S': [
      { dx: 30 * scale, dy: 0 }, // راست
      { dx: 10 * scale, dy: 20 * scale }, // پایین راست
      { dx: -30 * scale, dy: 20 * scale }, // چپ و پایین
      { dx: -10 * scale, dy: 20 * scale }, // پایین چپ
      { dx: 30 * scale, dy: 0 }, // راست
    ],
  };

  return paths[char] || []; // برگرداندن مسیر یا آرایه خالی
};

// تابع کمکی برای تولید رنگ رندوم (RGBA)
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b}, 0.8)`; // شفافیت 0.8 برای رنگ پایه
};

const LightEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ dx: 0, dy: 0 });
  const [isDrawing, setIsDrawing] = useState(true);
  const [pointColor, setPointColor] = useState<string>(getRandomColor()); // رنگ نقطه
  const requestRef = useRef<number>();
  const lastTimeRef = useRef<number>(performance.now());
  const pathIndexRef = useRef<number>(0);
  const charIndexRef = useRef<number>(0);

  const word = "NODE.JS";
  const LETTER_SPACING = 50;
  const **DRAWING_SPEED = 400;** // سرعت ترسیم (پیکسل بر ثانیه) - افزایش یافت
  const SCALE = 1;

  // --- تنظیمات افکت حرکت رندوم ---
  const POINT_SIZE = 5;
  const TRAIL_LENGTH = 100;
  const **BASE_SPEED = 250;** // سرعت پایه (پیکسل بر ثانیه) - افزایش یافت
  const **SPEED_VARIATION = 150;** // میزان تغییرات سرعت - افزایش یافت
  const ANGLE_CHANGE_INTERVAL = 1000; // هر 1 ثانیه (می‌توانید کمتر کنید برای تغییرات بیشتر)
  const lastAngleChangeRef = useRef<number>(0);
  const lastColorChangeRef = useRef<number>(0); // برای تغییر رنگ رندوم
  const COLOR_CHANGE_INTERVAL = 3000; // هر 3 ثانیه رنگ تغییر کند

  // --- مسیر کامل ترسیم ---
  const fullDrawingPath = useRef<{ dx: number; dy: number }[][]>([]);
  const startDrawingPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let currentX = window.innerWidth / 2 - (word.length * (40 * SCALE + LETTER_SPACING)) / 2;
    let currentY = window.innerHeight / 2 - (60 * SCALE) / 2;

    startDrawingPosition.current = { x: currentX, y: currentY };
    setPosition({ x: currentX, y: currentY });

    word.split('').forEach(char => {
      const charPath = getPathForChar(char, currentX, currentY, SCALE);
      if (char === 'N' || char === 'D' || char === 'E' || char === 'J' || char === 'S') {
        fullDrawingPath.current.push([{ dx: 0, dy: 60 * SCALE }]);
      } else if (char === 'O') {
         fullDrawingPath.current.push([{ dx: 0, dy: 30 * SCALE }]);
      }
      else {
        fullDrawingPath.current.push([{ dx: 0, dy: 0 }]);
      }
      fullDrawingPath.current.push(...charPath.map(p => ({ dx: p.dx, dy: p.dy })));
      fullDrawingPath.current.push([{ dx: LETTER_SPACING, dy: 0 }]);
    });

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const animate = (time: number) => {
    const deltaTime = (time - lastTimeRef.current) / 1000;
    lastTimeRef.current = time;

    // --- تغییر رنگ رندوم (هم برای حالت ترسیم و هم رندوم) ---
    if (time - lastColorChangeRef.current > COLOR_CHANGE_INTERVAL) {
      setPointColor(getRandomColor());
      lastColorChangeRef.current = time;
    }

    if (isDrawing) {
      if (charIndexRef.current < fullDrawingPath.current.length) {
        const segment = fullDrawingPath.current[charIndexRef.current];
        const targetDx = segment.dx;
        const targetDy = segment.dy;

        const distanceToTravel = DRAWING_SPEED * deltaTime;
        const currentSegmentLength = Math.sqrt(targetDx * targetDx + targetDy * targetDy);

        if (currentSegmentLength === 0) {
          setPosition(prevPos => ({
            x: prevPos.x + targetDx,
            y: prevPos.y + targetDy,
          }));
          charIndexRef.current++;
        } else {
          const ratio = distanceToTravel / currentSegmentLength;

          setPosition(prevPos => {
            let newX = prevPos.x + targetDx * Math.min(1, ratio);
            let newY = prevPos.y + targetDy * Math.min(1, ratio);
            return { x: newX, y: newY };
          });

          if (distanceToTravel >= currentSegmentLength) {
            setPosition(prevPos => ({
                x: prevPos.x + targetDx,
                y: prevPos.y + targetDy,
            }));
            charIndexRef.current++;
          }
        }
        setVelocity({ dx: targetDx, dy: targetDy });
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
      // حالت حرکت رندوم
      let currentVelocity = { ...velocity };

      if (time - lastAngleChangeRef.current > ANGLE_CHANGE_INTERVAL) {
        const angles = [
          Math.PI / 4, -Math.PI / 4, Math.PI / 2, -Math.PI / 2, Math.PI, 0
        ];
        const angleChange = angles[Math.floor(Math.random() * angles.length)];
        const currentAngle = Math.atan2(currentVelocity.dy, currentVelocity.dx);
        const newAngle = currentAngle + angleChange;
        
        const newSpeed = BASE_SPEED + Math.random() * SPEED_VARIATION;
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
  };

  const angleDeg = Math.atan2(velocity.dy, velocity.dx) * 180 / Math.PI;

  const trailStyle = {
    width: `${POINT_SIZE}px`,
    height: `${POINT_SIZE}px`,
    left: `${position.x}px`,
    top: `${position.y}px`,
    position: 'fixed',
    borderRadius: '50%',
    backgroundColor: pointColor, // استفاده از رنگ پویا
    boxShadow: `0 0 15px 5px ${pointColor.replace('0.8)', '0.5)')}, 0 0 25px 10px ${pointColor.replace('0.8)', '0.3)')}`, // boxShadow با رنگ پویا
    '--angle': `${angleDeg + 180}deg`,
    '--trail-length': `${TRAIL_LENGTH}px`,
    transition: isDrawing ? 'none' : 'transform 0.1s linear',
  } as React.CSSProperties;

  return <div style={trailStyle} className="light-point" />;
};

export default LightEffect;