import type { Platform } from "./records"

export type Game = {
    id: number;
    title: string;
    platform: Platform;
}