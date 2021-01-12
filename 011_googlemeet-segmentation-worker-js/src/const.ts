import { BrowserType } from './BrowserUtil';

export const WorkerCommand = {
    INITIALIZE   : 'initialize',
    PREDICT : 'predict',
}

export const WorkerResponse = {
    INITIALIZED      : 'initialized',
    PREDICTED   : 'predicted',
}

export interface GoogleMeetSegmentationConfig{
    browserType         : BrowserType
    processOnLocal      : boolean
    useTFWasmBackend    : boolean
    wasmPath            : string
    modelPath           : string
    workerPath          : string
}


export interface GoogleMeetSegmentationOperationParams{
    type                : GoogleMeetSegmentationFunctionType
    processWidth        : number
    processHeight       : number
    smoothingS          : number
    smoothingR          : number
    jbfWidth            : number
    jbfHeight           : number
    resizeWithCanvas    : boolean

    staticMemory        : boolean
    lightWrapping       : boolean
    jbfWasm             : boolean
}

export enum GoogleMeetSegmentationFunctionType{
    Segmentation,
    xxx, // Not implemented
}

