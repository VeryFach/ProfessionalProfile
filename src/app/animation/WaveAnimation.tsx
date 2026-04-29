'use client';

import styles from './WaveAnimation.module.css';

export default function WaveAnimation() {
    return (
        <div className={styles.container}>
            <svg
                className={styles.waveContainer}
                viewBox="0 0 1200 800"
                preserveAspectRatio="none"
            >
                {/* Gelombang 1 - Layer Background */}
                <path
                    className={`${styles.wave} ${styles.waveLayer1}`}
                    d="M0,150 Q150,50 300,150 T600,150 T900,150 T1200,150 L1200,800 L0,800 Z"
                    fill="url(#gradientWave1)"
                    stroke="none"
                />

                {/* Gelombang 1 - Garis Border */}
                <g className={`${styles.wave} ${styles.waveStroke}`}>
                    <path
                        d="M0,150 Q150,50 300,150 T600,150 T900,150 T1200,150 T1500,150 T1800,150"
                        stroke="#000000"
                        strokeWidth="5"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                    />
                </g>

                {/* Gelombang 2 - Layer Background */}
                <path
                    className={`${styles.wave} ${styles.waveLayer2} ${styles.wave2}`}
                    d="M0,100 Q150,0 300,100 T600,100 T900,100 T1200,100 L1200,800 L0,800 Z"
                    fill="url(#gradientWave2)"
                    stroke="none"
                />

                {/* Gelombang 2 - Garis Border */}
                <g className={`${styles.wave} ${styles.waveStroke} ${styles.wave2}`}>
                    <path
                        d="M0,100 Q150,0 300,100 T600,100 T900,100 T1200,100 T1500,100 T1800,100"
                        stroke="#000000"
                        strokeWidth="5"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                    />
                </g>

                {/* Gelombang 3 - Layer Background */}
                <path
                    className={`${styles.wave} ${styles.waveLayer3} ${styles.wave3}`}
                    d="M0,200 Q150,300 300,200 T600,200 T900,200 T1200,200 L1200,800 L0,800 Z"
                    fill="url(#gradientWave3)"
                    stroke="none"
                />

                {/* Gelombang 3 - Garis Border */}
                <g className={`${styles.wave} ${styles.waveStroke} ${styles.wave3}`}>
                    <path
                        d="M0,200 Q150,300 300,200 T600,200 T900,200 T1200,200 T1500,200 T1800,200"
                        stroke="#000000"
                        strokeWidth="5"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                    />
                </g>

                {/* Pixel/Particle Effects - Wave 1 */}
                <g className={styles.pixelGroup}>
                    <circle className={`${styles.pixel} ${styles.pixelWave1}`} cx="0" cy="150" r="3" fill="#000000" style={{ animationDelay: '0s' }} />
                    <circle className={`${styles.pixel} ${styles.pixelWave1}`} cx="0" cy="150" r="3" fill="#000000" style={{ animationDelay: '-2s' }} />
                    <circle className={`${styles.pixel} ${styles.pixelWave1}`} cx="0" cy="150" r="3" fill="#000000" style={{ animationDelay: '-4s' }} />
                    <circle className={`${styles.pixel} ${styles.pixelWave1}`} cx="0" cy="150" r="3" fill="#000000" style={{ animationDelay: '-6s' }} />
                </g>

                {/* Pixel/Particle Effects - Wave 2 */}
                <g className={styles.pixelGroup}>
                    <circle className={`${styles.pixel} ${styles.pixelWave2}`} cx="0" cy="100" r="3" fill="#000000" style={{ animationDelay: '-2.5s' }} />
                    <circle className={`${styles.pixel} ${styles.pixelWave2}`} cx="0" cy="100" r="3" fill="#000000" style={{ animationDelay: '-4.5s' }} />
                    <circle className={`${styles.pixel} ${styles.pixelWave2}`} cx="0" cy="100" r="3" fill="#000000" style={{ animationDelay: '-6.5s' }} />
                    <circle className={`${styles.pixel} ${styles.pixelWave2}`} cx="0" cy="100" r="3" fill="#000000" style={{ animationDelay: '-8s' }} />
                </g>

                {/* Pixel/Particle Effects - Wave 3 */}
                <g className={styles.pixelGroup}>
                    <circle className={`${styles.pixel} ${styles.pixelWave3}`} cx="0" cy="200" r="3" fill="#000000" style={{ animationDelay: '-5s' }} />
                    <circle className={`${styles.pixel} ${styles.pixelWave3}`} cx="0" cy="200" r="3" fill="#000000" style={{ animationDelay: '-7s' }} />
                    <circle className={`${styles.pixel} ${styles.pixelWave3}`} cx="0" cy="200" r="3" fill="#000000" style={{ animationDelay: '-9s' }} />
                    <circle className={`${styles.pixel} ${styles.pixelWave3}`} cx="0" cy="200" r="3" fill="#000000" style={{ animationDelay: '-11s' }} />
                </g>

                {/* Scattered Glow Pixels */}
                <g className={styles.glowPixels}>
                    <circle className={styles.glowPixel} cx="200" cy="150" r="2" fill="#000000" style={{ animationDelay: '0s' }} />
                    <circle className={styles.glowPixel} cx="500" cy="100" r="2" fill="#000000" style={{ animationDelay: '-1.5s' }} />
                    <circle className={styles.glowPixel} cx="800" cy="200" r="2" fill="#000000" style={{ animationDelay: '-3s' }} />
                    <circle className={styles.glowPixel} cx="1000" cy="150" r="2" fill="#000000" style={{ animationDelay: '-4.5s' }} />
                </g>

                {/* Gradien */}
                <defs>
                    {/* Gradien untuk fill area */}
                    <linearGradient id="gradientWave1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#000000" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradientWave2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#000000" stopOpacity="0.06" />
                        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradientWave3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#000000" stopOpacity="0.07" />
                        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
