import * as _THREE from 'three';
export declare enum ACTION {
    NONE = 0,
    ROTATE = 1,
    TRUCK = 2,
    OFFSET = 3,
    DOLLY = 4,
    ZOOM = 5,
    TOUCH_ROTATE = 6,
    TOUCH_TRUCK = 7,
    TOUCH_OFFSET = 8,
    TOUCH_DOLLY = 9,
    TOUCH_ZOOM = 10,
    TOUCH_DOLLY_TRUCK = 11,
    TOUCH_DOLLY_OFFSET = 12,
    TOUCH_ZOOM_TRUCK = 13,
    TOUCH_ZOOM_OFFSET = 14
}
export interface PointerInput {
    pointerId: number;
    clientX: number;
    clientY: number;
}
declare type mouseButtonAction = ACTION.ROTATE | ACTION.TRUCK | ACTION.OFFSET | ACTION.DOLLY | ACTION.ZOOM | ACTION.NONE;
declare type mouseWheelAction = ACTION.ROTATE | ACTION.TRUCK | ACTION.OFFSET | ACTION.DOLLY | ACTION.ZOOM | ACTION.NONE;
declare type singleTouchAction = ACTION.TOUCH_ROTATE | ACTION.TOUCH_TRUCK | ACTION.TOUCH_OFFSET | ACTION.DOLLY | ACTION.ZOOM | ACTION.NONE;
declare type multiTouchAction = ACTION.TOUCH_DOLLY_TRUCK | ACTION.TOUCH_DOLLY_OFFSET | ACTION.TOUCH_ZOOM_TRUCK | ACTION.TOUCH_ZOOM_OFFSET | ACTION.TOUCH_DOLLY | ACTION.TOUCH_ZOOM | ACTION.TOUCH_ROTATE | ACTION.TOUCH_TRUCK | ACTION.TOUCH_OFFSET | ACTION.NONE;
export interface MouseButtons {
    left: mouseButtonAction;
    middle: mouseButtonAction;
    right: mouseButtonAction;
    wheel: mouseWheelAction;
    shiftLeft: mouseButtonAction;
}
export interface Touches {
    one: singleTouchAction;
    two: multiTouchAction;
    three: multiTouchAction;
}
export interface FitToOptions {
    paddingLeft: number;
    paddingRight: number;
    paddingBottom: number;
    paddingTop: number;
}
export interface CameraControlsEventMap {
    update: {
        type: 'update';
    };
    wake: {
        type: 'wake';
    };
    sleep: {
        type: 'sleep';
    };
    controlstart: {
        type: 'controlstart';
    };
    control: {
        type: 'control';
    };
    controlend: {
        type: 'controlend';
    };
}
export declare function isPerspectiveCamera(camera: _THREE.Camera): camera is _THREE.PerspectiveCamera;
export declare function isOrthographicCamera(camera: _THREE.Camera): camera is _THREE.OrthographicCamera;
export {};
