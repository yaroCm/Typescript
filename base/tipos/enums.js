"use strict";
var AudioLevel;
(function (AudioLevel) {
    AudioLevel[AudioLevel["min"] = 0] = "min";
    AudioLevel[AudioLevel["medium"] = 1] = "medium";
    AudioLevel[AudioLevel["max"] = 2] = "max";
})(AudioLevel || (AudioLevel = {}));
console.log('🚀 ~ file: enums.ts:2 ~ AudioLevel:', AudioLevel);
let currentAudio = AudioLevel.min;
console.log('🚀 ~ file: enums.ts:8 ~ currentAudio:', currentAudio);
currentAudio = AudioLevel.max;
console.log('🚀 ~ file: enums.ts:12 ~ currentAudio:', currentAudio);
