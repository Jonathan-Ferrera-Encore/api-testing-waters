export interface IStorage {
    clear: () => void,
    getItem: (key:string) => any,
    getLength: () => number,
    removeItem: (key:string) => boolean,
    setItem: (key:string, value:any) => boolean,

    getBoolean?: (key:string) => boolean|null,
    getJson?: (key:string) => string|null,
    getNumber?: (key:string) => number
}