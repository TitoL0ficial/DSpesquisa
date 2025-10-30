export type RecordResponse = {
    content: RecordItem[];
    totalPages: number;
}

export type RecordItem = {
    id: number,
    moment: string,
    name: String,
    age: number,
    gameTitle: String,
    gamePlatform: Platform,
    genreName: String,
}

export type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';