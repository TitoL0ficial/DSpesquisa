export type RecordResponse = {
    content: RecordItem[];
    totalPages: number;
}

export type RecordItem = {
    id: number,
    moment: string,
    name: string,
    age: number,
    gameTitle: String,
    gamePlatform: Platform,
    genreName: string,
}

export type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';