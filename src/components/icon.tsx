import * as React from 'react';

interface Props {
    fill: string;
    className?: string;
}

const Icon = ({fill}: Props) => {
    return (
        <svg version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <title>David Glymph</title>
            <desc>An icon depicting the letters "D" and "G" combined</desc>
            <path fill={fill} transform="scale(1)" d="m0 22v42c-2.2952e-4 0.09896-2.2952e-4 0.19792 0 0.29688v41.703a22 22 45 0 0 22 22h42c35.346 0 64-28.654 64-64 0-1.3408-0.0421-2.6809-0.12626-4.0183-0.13868-2.2044-2.1666-3.9817-4.3757-3.9817h-55.498a4 4 135 0 0-4 4v16a4 4 45 0 0 4 4h28.66c2.2091 0 3.3006 1.6545 2.2202 3.5804-7.0241 12.521-20.319 20.419-34.88 20.42h-32a8 8 45 0 1-8-8v-31.924-0.076172-32a8 8 135 0 1 8-8h32c14.562 1.62e-4 27.856 7.8987 34.88 20.42 1.0804 1.9259 3.5706 3.5804 5.7798 3.5804h17.309c2.2091 0 3.5644-1.7392 2.8807-3.8395-8.5264-26.19-33.006-44.161-60.849-44.16h-42a22 22 135 0 0-22 22z" stroke-linecap="round" stroke-linejoin="round" stroke-width="86.797"/>
        </svg>
    );
}

export default Icon;