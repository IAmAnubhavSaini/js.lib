export const millisecond: 1;
export const second: number;
export const minute: number;
export const hour: number;
export const day: number;
export const week: number;
export class TimeTickerCallback {
    constructor(duration: any);
    duration: any;
    listeners: any[];
    intervalId: NodeJS.Timer;
    listen(callback: any): number;
    stopListening(id: any): void;
    destroy(): void;
}
export class TimeTickerList {
    constructor(duration: any);
    duration: any;
    ticks: any[];
    intervalId: NodeJS.Timer;
    destroy(): void;
}
