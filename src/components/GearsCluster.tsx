import styled from 'styled-components';
import GearLarge from '../assets/gears/Subtract.svg';
import GearMedium from '../assets/gears/Subtract.svg';
import GearSmall from '../assets/gears/Subtract.svg';

/**
 * Three-gear cluster matching the arrangement:
 *   - large gear bottom-left
 *   - medium gear top-right
 *   - small gear bottom-right
 *
 * Use the `rotate` prop to spin the whole cluster to any angle.
 * Use the `color` prop to tint the gears (defaults to orange #f78f27).
 */

interface Props {
    /** Overall rotation of the cluster in degrees */
    rotate?: number;
    /** Size of the large gear in px (others scale proportionally) */
    size?: number;
    /** CSS color string applied to all gear images via a tint filter */
    color?: 'orange' | 'white';
    className?: string;
}

const Wrapper = styled.div<{ $rotate: number; $size: number }>`
    position: relative;
    /* bounding box fits the cluster */
    width: ${(p) => p.$size * 1.75}px;
    height: ${(p) => p.$size * 1.5}px;
    transform: rotate(${(p) => p.$rotate}deg);
    flex-shrink: 0;
    pointer-events: none;
`;

const Gear = styled.img<{ $size: number; $top: number; $left: number; $color: string }>`
    position: absolute;
    width: ${(p) => p.$size}px;
    height: auto;
    top: ${(p) => p.$top}px;
    left: ${(p) => p.$left}px;
    filter: ${(p) =>
        p.$color === 'white'
            ? 'brightness(0) invert(1)'
            : ' saturate(600%)  brightness(103%) contrast(97%)'};
`;

export default function GearsCluster({
    rotate = 0,
    size = 90,
    color = 'orange',
    className,
}: Props) {
    const med = size * 0.6;
    const sm = size * 0.35;

    return (
        <Wrapper $rotate={rotate} $size={size} className={className}>
            {/* Large – bottom left */}
            <Gear
                src={GearLarge}
                $size={size}
                $top={size * 0.42}
                $left={0}
                $color={color}
                alt=""
            />
            {/* Medium – top right */}
            <Gear
                src={GearMedium}
                $size={med}
                $top={0}
                $left={size * 0.9}
                $color={color}
                alt=""
            />
            {/* Small – bottom right */}
            <Gear
                src={GearSmall}
                $size={sm}
                $top={size * 0.8}
                $left={size * 1.25}
                $color={color}
                alt=""
            />
        </Wrapper>
    );
}
