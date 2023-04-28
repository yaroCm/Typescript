enum AudioLevel {
  min,
  medium,
  max,
}

console.log('🚀 ~ file: enums.ts:2 ~ AudioLevel:', AudioLevel);

let currentAudio = AudioLevel.min;
console.log('🚀 ~ file: enums.ts:8 ~ currentAudio:', currentAudio);

currentAudio = AudioLevel.max;
console.log('🚀 ~ file: enums.ts:12 ~ currentAudio:', currentAudio);
