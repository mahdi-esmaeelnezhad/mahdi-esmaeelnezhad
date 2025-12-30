import { useEffect, useRef, useState, useCallback } from 'react';
import { HiArrowLeft, HiRefresh } from 'react-icons/hi';

const DinoGame = ({ onClose }) => {
    const canvasRef = useRef(null);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(() => {
        return parseInt(localStorage.getItem('dinoHighScore') || '0');
    });
    const [isPlaying, setIsPlaying] = useState(false);
    
    const GROUND_Y = 235;
    const DINO_WIDTH = 60;
    const DINO_HEIGHT = 65;
    
    const gameRef = useRef({
        dino: { 
            x: 50, 
            y: GROUND_Y - DINO_HEIGHT, 
            width: DINO_WIDTH, 
            height: DINO_HEIGHT, 
            vy: 0, 
            jumping: false,
            runFrame: 0
        },
        obstacles: [],
        particles: [],
        stars: [],
        clouds: [],
        gravity: 0.65,
        jumpForce: -14,
        speed: 6,
        score: 0,
        frameCount: 0,
        animationFrame: null,
        isRunning: false
    });

    useEffect(() => {
        const stars = [];
        for (let i = 0; i < 80; i++) {
            stars.push({
                x: Math.random() * 700,
                y: Math.random() * 160,
                size: Math.random() * 2 + 0.3,
                twinkle: Math.random() * 100,
                brightness: Math.random() * 0.5 + 0.5
            });
        }
        const clouds = [];
        for (let i = 0; i < 4; i++) {
            clouds.push({
                x: i * 200 + Math.random() * 100,
                y: 30 + Math.random() * 60,
                width: 60 + Math.random() * 40,
                speed: 0.2 + Math.random() * 0.3
            });
        }
        gameRef.current.stars = stars;
        gameRef.current.clouds = clouds;
    }, []);

    const resetGame = useCallback(() => {
        const game = gameRef.current;
        game.dino = { 
            x: 50, 
            y: GROUND_Y - DINO_HEIGHT, 
            width: DINO_WIDTH, 
            height: DINO_HEIGHT, 
            vy: 0, 
            jumping: false,
            runFrame: 0
        };
        game.obstacles = [];
        game.particles = [];
        game.speed = 6;
        game.score = 0;
        game.frameCount = 0;
    }, []);

    const startGame = useCallback(() => {
        resetGame();
        setScore(0);
        setGameOver(false);
        setIsPlaying(true);
        gameRef.current.isRunning = true;
    }, [resetGame]);

    const endGame = useCallback(() => {
        const game = gameRef.current;
        game.isRunning = false;
        
        for (let i = 0; i < 25; i++) {
            game.particles.push({
                x: game.dino.x + game.dino.width / 2,
                y: game.dino.y + game.dino.height / 2,
                vx: (Math.random() - 0.5) * 12,
                vy: (Math.random() - 0.5) * 12 - 3,
                life: 40,
                size: Math.random() * 4 + 2,
                color: ['#22c55e', '#4ade80', '#06b6d4', '#67e8f9'][Math.floor(Math.random() * 4)]
            });
        }
        
        setIsPlaying(false);
        setGameOver(true);
        if (game.score > highScore) {
            setHighScore(game.score);
            localStorage.setItem('dinoHighScore', game.score.toString());
        }
    }, [highScore]);

    const jump = useCallback(() => {
        const game = gameRef.current;
        if (game.isRunning && !game.dino.jumping) {
            game.dino.vy = game.jumpForce;
            game.dino.jumping = true;
            for (let i = 0; i < 8; i++) {
                game.particles.push({
                    x: game.dino.x + 30 + Math.random() * 20,
                    y: GROUND_Y,
                    vx: (Math.random() - 0.5) * 4,
                    vy: -Math.random() * 3 - 1,
                    life: 20,
                    size: Math.random() * 3 + 1,
                    color: '#6b7280'
                });
            }
        }
        if (!isPlaying && !gameOver) startGame();
        if (gameOver) startGame();
    }, [isPlaying, gameOver, startGame]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
                e.preventDefault();
                jump();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [jump]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const game = gameRef.current;

        const drawBackground = () => {
            const gradient = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
            gradient.addColorStop(0, '#050510');
            gradient.addColorStop(0.3, '#0a0a1a');
            gradient.addColorStop(0.7, '#101025');
            gradient.addColorStop(1, '#181830');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, GROUND_Y);

            // Stars
            game.stars.forEach(star => {
                const twinkle = Math.sin((game.frameCount + star.twinkle) * 0.03) * 0.4 + 0.6;
                ctx.fillStyle = `rgba(255, 255, 255, ${twinkle * star.brightness})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Moon with craters
            ctx.fillStyle = '#e5e7eb';
            ctx.beginPath();
            ctx.arc(620, 55, 30, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#d1d5db';
            ctx.beginPath();
            ctx.arc(610, 50, 6, 0, Math.PI * 2);
            ctx.arc(628, 60, 4, 0, Math.PI * 2);
            ctx.arc(618, 68, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#9ca3af';
            ctx.beginPath();
            ctx.arc(632, 45, 3, 0, Math.PI * 2);
            ctx.arc(605, 62, 2, 0, Math.PI * 2);
            ctx.fill();

            // Clouds
            game.clouds.forEach(cloud => {
                cloud.x -= cloud.speed;
                if (cloud.x + cloud.width < 0) cloud.x = canvas.width + 50;
                
                ctx.fillStyle = 'rgba(30, 30, 50, 0.6)';
                const cx = cloud.x, cy = cloud.y, w = cloud.width;
                ctx.beginPath();
                ctx.ellipse(cx, cy, w * 0.4, 12, 0, 0, Math.PI * 2);
                ctx.ellipse(cx + w * 0.25, cy - 5, w * 0.3, 15, 0, 0, Math.PI * 2);
                ctx.ellipse(cx - w * 0.2, cy + 3, w * 0.25, 10, 0, 0, Math.PI * 2);
                ctx.fill();
            });
        };

        const drawRealisticDino = () => {
            const d = game.dino;
            const runCycle = Math.sin(game.frameCount * 0.35) * (d.jumping ? 0 : 1);
            
            ctx.save();
            
            // Shadow
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            const shadowScale = d.jumping ? 0.6 : 1;
            ctx.beginPath();
            ctx.ellipse(d.x + 30, GROUND_Y + 3, 28 * shadowScale, 8 * shadowScale, 0, 0, Math.PI * 2);
            ctx.fill();

            // Colors
            const bodyDark = '#15803d';
            const bodyMain = '#22c55e';
            const bodyLight = '#4ade80';
            const bodyHighlight = '#86efac';
            const belly = '#a7f3d0';

            // Tail
            ctx.fillStyle = bodyMain;
            ctx.beginPath();
            ctx.moveTo(d.x + 5, d.y + 35);
            ctx.quadraticCurveTo(d.x - 15, d.y + 25, d.x - 25, d.y + 30 + runCycle * 3);
            ctx.quadraticCurveTo(d.x - 30, d.y + 35, d.x - 25, d.y + 40 + runCycle * 2);
            ctx.quadraticCurveTo(d.x - 10, d.y + 42, d.x + 5, d.y + 45);
            ctx.closePath();
            ctx.fill();
            
            // Tail stripe
            ctx.fillStyle = bodyDark;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y + 38);
            ctx.quadraticCurveTo(d.x - 12, d.y + 33, d.x - 20, d.y + 35 + runCycle * 2);
            ctx.quadraticCurveTo(d.x - 12, d.y + 38, d.x, d.y + 42);
            ctx.closePath();
            ctx.fill();

            // Back leg (behind)
            const backLegOffset = runCycle * 8;
            ctx.fillStyle = bodyDark;
            ctx.beginPath();
            ctx.moveTo(d.x + 15, d.y + 45);
            ctx.lineTo(d.x + 10, d.y + 58 - backLegOffset);
            ctx.lineTo(d.x + 8, d.y + 62 - backLegOffset);
            ctx.lineTo(d.x + 20, d.y + 62 - backLegOffset);
            ctx.lineTo(d.x + 18, d.y + 58 - backLegOffset);
            ctx.lineTo(d.x + 25, d.y + 45);
            ctx.closePath();
            ctx.fill();
            
            // Back foot claws
            ctx.fillStyle = '#064e3b';
            ctx.fillRect(d.x + 6, d.y + 60 - backLegOffset, 4, 5);
            ctx.fillRect(d.x + 11, d.y + 61 - backLegOffset, 4, 4);
            ctx.fillRect(d.x + 16, d.y + 60 - backLegOffset, 4, 5);

            // Body
            ctx.fillStyle = bodyMain;
            ctx.beginPath();
            ctx.ellipse(d.x + 28, d.y + 38, 22, 18, 0, 0, Math.PI * 2);
            ctx.fill();

            // Body shading
            ctx.fillStyle = bodyDark;
            ctx.beginPath();
            ctx.ellipse(d.x + 25, d.y + 42, 18, 12, 0.2, 0, Math.PI * 2);
            ctx.fill();
            
            // Belly
            ctx.fillStyle = belly;
            ctx.beginPath();
            ctx.ellipse(d.x + 32, d.y + 42, 10, 10, -0.3, 0, Math.PI);
            ctx.fill();

            // Front leg
            const frontLegOffset = -runCycle * 8;
            ctx.fillStyle = bodyMain;
            ctx.beginPath();
            ctx.moveTo(d.x + 30, d.y + 48);
            ctx.lineTo(d.x + 28, d.y + 58 - frontLegOffset);
            ctx.lineTo(d.x + 26, d.y + 62 - frontLegOffset);
            ctx.lineTo(d.x + 38, d.y + 62 - frontLegOffset);
            ctx.lineTo(d.x + 36, d.y + 58 - frontLegOffset);
            ctx.lineTo(d.x + 40, d.y + 48);
            ctx.closePath();
            ctx.fill();
            
            // Front foot claws
            ctx.fillStyle = '#064e3b';
            ctx.fillRect(d.x + 24, d.y + 60 - frontLegOffset, 4, 5);
            ctx.fillRect(d.x + 29, d.y + 61 - frontLegOffset, 4, 4);
            ctx.fillRect(d.x + 34, d.y + 60 - frontLegOffset, 4, 5);

            // Neck
            ctx.fillStyle = bodyMain;
            ctx.beginPath();
            ctx.moveTo(d.x + 40, d.y + 28);
            ctx.quadraticCurveTo(d.x + 50, d.y + 15, d.x + 48, d.y + 8);
            ctx.lineTo(d.x + 55, d.y + 5);
            ctx.quadraticCurveTo(d.x + 58, d.y + 18, d.x + 48, d.y + 32);
            ctx.closePath();
            ctx.fill();

            // Head
            ctx.fillStyle = bodyMain;
            ctx.beginPath();
            ctx.moveTo(d.x + 48, d.y + 5);
            ctx.lineTo(d.x + 75, d.y + 2);
            ctx.quadraticCurveTo(d.x + 82, d.y + 8, d.x + 78, d.y + 18);
            ctx.lineTo(d.x + 55, d.y + 22);
            ctx.quadraticCurveTo(d.x + 48, d.y + 18, d.x + 48, d.y + 5);
            ctx.closePath();
            ctx.fill();

            // Head top shading
            ctx.fillStyle = bodyLight;
            ctx.beginPath();
            ctx.moveTo(d.x + 52, d.y + 5);
            ctx.lineTo(d.x + 70, d.y + 3);
            ctx.quadraticCurveTo(d.x + 60, d.y + 8, d.x + 52, d.y + 5);
            ctx.fill();

            // Jaw
            ctx.fillStyle = bodyMain;
            ctx.beginPath();
            ctx.moveTo(d.x + 55, d.y + 18);
            ctx.lineTo(d.x + 78, d.y + 16);
            ctx.lineTo(d.x + 76, d.y + 24);
            ctx.lineTo(d.x + 55, d.y + 26);
            ctx.closePath();
            ctx.fill();

            // Jaw underside
            ctx.fillStyle = belly;
            ctx.beginPath();
            ctx.moveTo(d.x + 56, d.y + 22);
            ctx.lineTo(d.x + 74, d.y + 20);
            ctx.lineTo(d.x + 72, d.y + 25);
            ctx.lineTo(d.x + 56, d.y + 26);
            ctx.closePath();
            ctx.fill();

            // Eye socket
            ctx.fillStyle = bodyDark;
            ctx.beginPath();
            ctx.ellipse(d.x + 62, d.y + 10, 7, 6, 0, 0, Math.PI * 2);
            ctx.fill();

            // Eye white
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.ellipse(d.x + 63, d.y + 10, 5, 4, 0.1, 0, Math.PI * 2);
            ctx.fill();

            // Pupil
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.ellipse(d.x + 64, d.y + 10, 2.5, 3, 0, 0, Math.PI * 2);
            ctx.fill();

            // Eye shine
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(d.x + 62, d.y + 8, 1.5, 0, Math.PI * 2);
            ctx.fill();

            // Nostril
            ctx.fillStyle = '#064e3b';
            ctx.beginPath();
            ctx.ellipse(d.x + 76, d.y + 6, 2, 1.5, 0, 0, Math.PI * 2);
            ctx.fill();

            // Teeth
            ctx.fillStyle = '#f9fafb';
            const teeth = [60, 64, 68, 72];
            teeth.forEach((tx, i) => {
                ctx.beginPath();
                ctx.moveTo(d.x + tx, d.y + 17);
                ctx.lineTo(d.x + tx + 2, d.y + 17);
                ctx.lineTo(d.x + tx + 1, d.y + 20 + (i % 2) * 2);
                ctx.closePath();
                ctx.fill();
            });

            // Small arms
            ctx.fillStyle = bodyMain;
            ctx.beginPath();
            ctx.moveTo(d.x + 42, d.y + 32);
            ctx.quadraticCurveTo(d.x + 50, d.y + 35, d.x + 52, d.y + 40);
            ctx.lineTo(d.x + 48, d.y + 42);
            ctx.quadraticCurveTo(d.x + 46, d.y + 38, d.x + 40, d.y + 36);
            ctx.closePath();
            ctx.fill();

            // Arm claws
            ctx.fillStyle = '#064e3b';
            ctx.fillRect(d.x + 50, d.y + 40, 2, 4);
            ctx.fillRect(d.x + 47, d.y + 41, 2, 3);

            // Back spines
            ctx.fillStyle = bodyDark;
            const spines = [
                [20, 28, 6], [28, 25, 8], [36, 24, 7], [44, 26, 5]
            ];
            spines.forEach(([sx, sy, sh]) => {
                ctx.beginPath();
                ctx.moveTo(d.x + sx - 3, d.y + sy);
                ctx.lineTo(d.x + sx, d.y + sy - sh);
                ctx.lineTo(d.x + sx + 3, d.y + sy);
                ctx.closePath();
                ctx.fill();
            });

            // Scales pattern
            ctx.fillStyle = bodyDark;
            ctx.globalAlpha = 0.3;
            for (let i = 0; i < 5; i++) {
                ctx.beginPath();
                ctx.arc(d.x + 18 + i * 8, d.y + 38 + (i % 2) * 4, 2, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1;

            ctx.restore();
        };

        const drawCactus = (obs) => {
            ctx.save();
            
            // Shadow
            ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
            ctx.beginPath();
            ctx.ellipse(obs.x + 16, GROUND_Y + 4, 20, 6, 0, 0, Math.PI * 2);
            ctx.fill();

            const cactusGradient = ctx.createLinearGradient(obs.x, obs.y, obs.x + 35, obs.y + obs.height);
            cactusGradient.addColorStop(0, '#22d3ee');
            cactusGradient.addColorStop(0.5, '#06b6d4');
            cactusGradient.addColorStop(1, '#0891b2');

            // Main stem
            ctx.fillStyle = cactusGradient;
            ctx.beginPath();
            ctx.roundRect(obs.x + 11, obs.y, 13, obs.height, 5);
            ctx.fill();

            // Highlight
            ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
            ctx.beginPath();
            ctx.roundRect(obs.x + 13, obs.y + 3, 4, obs.height - 6, 2);
            ctx.fill();

            // Left arm
            ctx.fillStyle = cactusGradient;
            ctx.beginPath();
            ctx.roundRect(obs.x - 2, obs.y + 15, 15, 9, 4);
            ctx.fill();
            ctx.beginPath();
            ctx.roundRect(obs.x - 5, obs.y + 6, 10, 22, 4);
            ctx.fill();

            // Right arm
            ctx.beginPath();
            ctx.roundRect(obs.x + 22, obs.y + 20, 15, 9, 4);
            ctx.fill();
            ctx.beginPath();
            ctx.roundRect(obs.x + 30, obs.y + 12, 10, 22, 4);
            ctx.fill();

            // Ribs
            ctx.strokeStyle = '#0e7490';
            ctx.lineWidth = 1;
            for (let i = 5; i < obs.height - 5; i += 6) {
                ctx.beginPath();
                ctx.moveTo(obs.x + 14, obs.y + i);
                ctx.lineTo(obs.x + 21, obs.y + i);
                ctx.stroke();
            }

            // Spines
            ctx.fillStyle = '#fef3c7';
            const spinePositions = [
                [8, 10], [8, 20], [8, 30],
                [27, 15], [27, 25], [27, 35],
                [-3, 12], [-3, 20],
                [38, 18], [38, 26]
            ];
            spinePositions.forEach(([sx, sy]) => {
                if (obs.y + sy < GROUND_Y) {
                    ctx.beginPath();
                    ctx.moveTo(obs.x + sx, obs.y + sy);
                    ctx.lineTo(obs.x + sx - 3, obs.y + sy - 2);
                    ctx.lineTo(obs.x + sx, obs.y + sy - 1);
                    ctx.lineTo(obs.x + sx + 3, obs.y + sy - 2);
                    ctx.closePath();
                    ctx.fill();
                }
            });

            ctx.restore();
        };

        const drawGround = () => {
            // Ground base
            const groundGradient = ctx.createLinearGradient(0, GROUND_Y, 0, canvas.height);
            groundGradient.addColorStop(0, '#44403c');
            groundGradient.addColorStop(0.3, '#292524');
            groundGradient.addColorStop(1, '#1c1917');
            ctx.fillStyle = groundGradient;
            ctx.fillRect(0, GROUND_Y, canvas.width, canvas.height - GROUND_Y);

            // Ground line
            ctx.strokeStyle = '#57534e';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, GROUND_Y);
            ctx.lineTo(canvas.width, GROUND_Y);
            ctx.stroke();

            // Texture
            const offset = (game.frameCount * game.speed) % 80;
            ctx.fillStyle = '#57534e';
            for (let i = -80; i < canvas.width + 80; i += 80) {
                ctx.fillRect(i - offset, GROUND_Y + 8, 30, 2);
                ctx.fillRect(i - offset + 45, GROUND_Y + 16, 20, 2);
            }

            // Pebbles
            ctx.fillStyle = '#78716c';
            for (let i = 0; i < 10; i++) {
                const px = ((i * 73 + game.frameCount * game.speed) % (canvas.width + 50)) - 25;
                ctx.beginPath();
                ctx.ellipse(px, GROUND_Y + 22 + (i % 3) * 8, 3 + (i % 2), 2, 0, 0, Math.PI * 2);
                ctx.fill();
            }

            // Grass tufts
            ctx.strokeStyle = '#65a30d';
            ctx.lineWidth = 1.5;
            for (let i = 0; i < 8; i++) {
                const gx = ((i * 97 + game.frameCount * game.speed * 0.5) % (canvas.width + 30)) - 15;
                ctx.beginPath();
                ctx.moveTo(gx, GROUND_Y);
                ctx.lineTo(gx - 3, GROUND_Y - 8);
                ctx.moveTo(gx, GROUND_Y);
                ctx.lineTo(gx + 2, GROUND_Y - 10);
                ctx.moveTo(gx, GROUND_Y);
                ctx.lineTo(gx + 5, GROUND_Y - 7);
                ctx.stroke();
            }
        };

        const drawParticles = () => {
            for (let i = game.particles.length - 1; i >= 0; i--) {
                const p = game.particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.4;
                p.life--;

                if (p.x >= 0 && p.x <= canvas.width && p.y >= 0 && p.y <= canvas.height) {
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = p.life / 40;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size * (p.life / 40), 0, Math.PI * 2);
                    ctx.fill();
                    ctx.globalAlpha = 1;
                }

                if (p.life <= 0) {
                    game.particles.splice(i, 1);
                }
            }
        };

        const drawRunningDust = () => {
            if (!game.dino.jumping && game.isRunning && game.frameCount % 6 === 0) {
                game.particles.push({
                    x: game.dino.x + 25,
                    y: GROUND_Y - 2,
                    vx: -Math.random() * 2 - game.speed * 0.3,
                    vy: -Math.random() * 2,
                    life: 18,
                    size: Math.random() * 3 + 2,
                    color: '#78716c'
                });
            }
        };

        const checkCollision = (obs) => {
            const d = game.dino;
            const dinoLeft = d.x + 12;
            const dinoRight = d.x + d.width - 8;
            const dinoTop = d.y + 8;
            const dinoBottom = d.y + d.height - 5;
            
            const obsLeft = obs.x + 5;
            const obsRight = obs.x + obs.width - 5;
            const obsTop = obs.y + 3;
            const obsBottom = obs.y + obs.height;
            
            return dinoRight > obsLeft && dinoLeft < obsRight && dinoBottom > obsTop && dinoTop < obsBottom;
        };

        const gameLoop = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            ctx.save();
            ctx.beginPath();
            ctx.rect(0, 0, canvas.width, canvas.height);
            ctx.clip();
            
            drawBackground();
            drawGround();

            if (!game.isRunning) {
                game.dino.y = GROUND_Y - DINO_HEIGHT;
                drawRealisticDino();
                drawParticles();
                ctx.restore();
                if (gameOver) {
                    game.animationFrame = requestAnimationFrame(gameLoop);
                }
                return;
            }

            game.dino.vy += game.gravity;
            game.dino.y += game.dino.vy;

            const groundLevel = GROUND_Y - game.dino.height;
            if (game.dino.y >= groundLevel) {
                game.dino.y = groundLevel;
                game.dino.vy = 0;
                game.dino.jumping = false;
            }

            drawRunningDust();
            drawRealisticDino();

            const spawnRate = Math.max(65, 105 - Math.floor(game.score / 10));
            if (game.frameCount % spawnRate === 0 && game.frameCount > 50) {
                const cactusHeight = 42 + Math.random() * 20;
                game.obstacles.push({
                    x: canvas.width,
                    y: GROUND_Y - cactusHeight,
                    width: 35,
                    height: cactusHeight
                });
            }

            for (let i = game.obstacles.length - 1; i >= 0; i--) {
                const obs = game.obstacles[i];
                obs.x -= game.speed;
                drawCactus(obs);

                if (checkCollision(obs)) {
                    endGame();
                    ctx.restore();
                    return;
                }

                if (obs.x + obs.width < 0) {
                    game.obstacles.splice(i, 1);
                }
            }

            drawParticles();

            game.frameCount++;
            if (game.frameCount % 5 === 0) {
                game.score++;
                setScore(game.score);
            }

            if (game.score > 0 && game.score % 100 === 0 && game.speed < 14) {
                game.speed += 0.4;
            }

            ctx.restore();
            game.animationFrame = requestAnimationFrame(gameLoop);
        };

        game.animationFrame = requestAnimationFrame(gameLoop);

        return () => {
            if (game.animationFrame) cancelAnimationFrame(game.animationFrame);
        };
    }, [isPlaying, gameOver, endGame]);

    return (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 max-w-3xl w-full shadow-2xl border border-gray-700/50">
                <div className="flex items-center justify-between mb-6">
                    <button onClick={onClose} className="flex items-center gap-2 text-gray-400 hover:text-white transition-all group">
                        <HiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
                        <span>Back</span>
                    </button>
                    <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                        <span className="text-4xl">🦖</span>
                        <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">T-Rex Runner</span>
                    </h2>
                    <div className="flex items-center gap-6">
                        <div className="text-right px-4 py-2 bg-gray-800/50 rounded-xl">
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Best</p>
                            <p className="text-green-400 font-mono font-bold text-xl">{highScore.toString().padStart(5, '0')}</p>
                        </div>
                        <div className="text-right px-4 py-2 bg-gray-800/50 rounded-xl">
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Score</p>
                            <p className="text-white font-mono font-bold text-xl">{score.toString().padStart(5, '0')}</p>
                        </div>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                    <canvas ref={canvasRef} width={700} height={280} className="w-full cursor-pointer block" onClick={jump} />

                    {!isPlaying && !gameOver && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm">
                            <div className="text-7xl mb-6 animate-bounce">🦖</div>
                            <p className="text-white text-3xl font-bold mb-3">Ready to Run?</p>
                            <p className="text-gray-400 mb-8">Jump over the cacti to survive!</p>
                            <div className="flex items-center gap-4">
                                <kbd className="px-6 py-3 bg-green-500/20 border-2 border-green-500/50 rounded-xl text-green-400 font-mono text-lg">SPACE</kbd>
                                <span className="text-gray-500">or</span>
                                <kbd className="px-6 py-3 bg-green-500/20 border-2 border-green-500/50 rounded-xl text-green-400 font-mono text-lg">CLICK</kbd>
                            </div>
                        </div>
                    )}

                    {gameOver && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm">
                            <div className="text-6xl mb-4">💀</div>
                            <p className="text-white text-4xl font-bold mb-3">GAME OVER</p>
                            <p className="text-cyan-400 text-5xl font-mono font-bold mb-6">{score}</p>
                            {score >= highScore && score > 0 && (
                                <div className="flex items-center gap-3 text-green-400 font-bold mb-6 animate-pulse text-xl">
                                    <span>🎉</span><span>NEW HIGH SCORE!</span><span>🎉</span>
                                </div>
                            )}
                            <button onClick={startGame} className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all hover:scale-105">
                                <HiRefresh className="text-2xl" />
                                Play Again
                            </button>
                        </div>
                    )}
                </div>

                <div className="mt-6 flex items-center justify-center gap-8 text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                        <kbd className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-xs">SPACE</kbd>
                        <span>Jump</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <kbd className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-xs">↑</kbd>
                        <span>Jump</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DinoGame;
