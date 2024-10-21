export interface IHighlightMarkerOptions {
    root?: HTMLElement,
    highlightStyle?: string,
    className?: string,


    // hooks
    onClick: () => void,
    onHover: () => void,

    beforeTextMark: () => void,
    afterTextMarked: () => void,
    
}

export enum EnumStatus {
    "init",
    "automatic",
    "manual"
}