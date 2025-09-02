"use client";

import {
    EffectComposer,
    DotScreen,
    HueSaturation,
    Grid,
    Noise
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

export function PostProcessingEffects() {
    return (
        <EffectComposer>
            {/* CHOOSE ONE OF THE EFFECTS BELOW 
              Uncomment the one you want to use.
            */}

<Noise
                premultiply // Corrects for WebGL premultiplied alpha
                blendFunction={BlendFunction.OVERLAY} // Or SCREEN, OVERLAY
                opacity={0.3} // Adjust the intensity of the noise
            />
        </EffectComposer>
    );
}