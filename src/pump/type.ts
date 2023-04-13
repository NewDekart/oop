 export enum MaterialType {
    STEEL = 'steel',
    CAST_IRON = 'cat_iron'
 }

export interface Material {
    type: MaterialType
    density: number;
}
