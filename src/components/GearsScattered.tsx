import styled from 'styled-components';
import GearSvg from '../assets/gears/Subtract.svg';

/**
 * Multi-gear scattered background cluster matching the hero design:
 * ~7 gears arranged diagonally from tiny (bottom-left) to very large (right).
 * Designed to sit on the left side of the hero panel.
 */

interface Props {
    className?: string;
    /** Scale factor – 1 = default size (~650×300px bounding box) */
    scale?: number;
    opacity?: number;
}

const Canvas = styled.div<{ $w: number; $h: number }>`
    position: relative;
    width: ${(p) => p.$w}px;
    height: ${(p) => p.$h}px;
    pointer-events: none;
    flex-shrink: 0;
`;

const G = styled.img<{ $s: number; $t: number; $l: number; $rot: number }>`
    position: absolute;
    width: ${(p) => p.$s}px;
    height: ${(p) => p.$s}px;
    top: ${(p) => p.$t}px;
    left: ${(p) => p.$l}px;
    transform: rotate(${(p) => p.$rot}deg);
    /* tint to orange */
    filter: saturate(600%) brightness(103%) contrast(97%);
`;

// Each gear: [size, top, left, rotation]  (all in px at scale=1)
const GEARS: [number, number, number, number][] = [
    [22, 245, 18, 0],   // tiny  – bottom-left
    [36, 215, 65, 20],   // small
    [28, 175, 125, 45],   // tiny-mid
    [52, 148, 170, 10],   // small-mid
    [78, 105, 240, 30],   // medium
    [120, 55, 340, 15],   // large
    [250, 5, 445, 0],   // extra-large (right, partially clipped)
];

export default function GearsScattered({ className, scale = 1, opacity = 0.18 }: Props) {
    const W = 650 * scale;
    const H = 300 * scale;

    return (
        <Canvas $w={W} $h={H} className={className} style={{ opacity }}>
            {GEARS.map(([s, t, l, rot], i) => (
                <G
                    key={i}
                    src={GearSvg}
                    alt=""
                    $s={s * scale}
                    $t={t * scale}
                    $l={l * scale}
                    $rot={rot}
                />
            ))}
        </Canvas>
    );
}
