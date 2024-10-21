import { EnumStatus, IHighlightMarkerOptions } from "../types";



class HighlightMarker {
    private root: HTMLElement = document?.body;
    private status: EnumStatus = EnumStatus.init;
    private options: IHighlightMarkerOptions;
    constructor(options: IHighlightMarkerOptions) {
        this.options = options;
        
    }

}

export default HighlightMarker;