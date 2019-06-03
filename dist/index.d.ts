/// <reference types="node" />
declare const setImmediateInterval: (callback: () => void, ms: number) => NodeJS.Timeout;
export default setImmediateInterval;
