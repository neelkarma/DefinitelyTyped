// Type definitions for bwip-js  3.0.1
// Project: https://github.com/metafloor/bwip-js
// Definitions by: TANAKA Koichi <https://github.com/MugeSo>
//                 Guillaume VanderEst <https://github.com/gvanderest>
//                 Ryan Jentzsch <http://github.com/RyanNerd>
//                 neelkarma <https://github.com/neelkarma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { IncomingMessage as Request, ServerResponse as Response } from "http";

declare namespace BwipJs {
    export function loadFont(fontName: string, sizeMulti: number, fontFile: string): void;
    export function toBuffer(opts: BwipJSOptionsWithBCID, callback: (err: string | Error, png: Buffer) => void): void;
    export function toBuffer(opts: BwipJSOptionsWithBCID): Promise<Buffer>;
    export function toCanvas(canvas: string | HTMLCanvasElement, opts: BwipJSOptionsWithBCID): HTMLCanvasElement;

    interface BWIPJSOptions {
        text: string;

        parse?: boolean | undefined;
        parsefnc?: boolean | undefined;

        height?: number | undefined;
        width?: number | undefined;

        scaleX?: number | undefined;
        scaleY?: number | undefined;
        scale?: number | undefined;

        rotate?: "N" | "R" | "L" | "I" | undefined;

        paddingwidth?: number | undefined;
        paddingheight?: number | undefined;

        monochrome?: boolean | undefined;
        alttext?: boolean | undefined;

        includetext?: boolean | undefined;
        textfont?: string | undefined;
        textsize?: number | undefined;
        textgaps?: number | undefined;

        textxalign?: "offleft" | "left" | "center" | "right" | "offright" | "justify" | undefined;
        textyalign?: "below" | "center" | "above" | undefined;
        textxoffset?: number | undefined;
        textyoffset?: number | undefined;

        showborder?: boolean | undefined;
        borderwidth?: number | undefined;
        borderleft?: number | undefined;
        borderright?: number | undefined;
        bordertop?: number | undefined;
        boraderbottom?: number | undefined;

        barcolor?: string | undefined;
        backgroundcolor?: string | undefined;
        bordercolor?: string | undefined;
        textcolor?: string | undefined;

        addontextxoffset?: number | undefined;
        addontextyoffset?: number | undefined;
        addontextfont?: string | undefined;
        addontextsize?: number | undefined;

        guardwhitespace?: boolean | undefined;
        guardwidth?: number | undefined;
        guardheight?: number | undefined;
        guardleftpos?: number | undefined;
        guardrightpos?: number | undefined;
        guardleftypos?: number | undefined;
        guardrightypos?: number | undefined;

        sizelimit?: number | undefined;

        includecheck?: boolean | undefined;
        includecheckintext?: boolean | undefined;

        inkspread?: number | undefined;
        inkspreadh?: number | undefined;
        inkspreadv?: number | undefined;
    }

    interface BwipJSOptionsWithBCID extends BWIPJSOptions {
        bcid: string;
    }

    export function auspost(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function azteccode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function azteccodecompact(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function aztecrune(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function bc412(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function channelcode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function codeblockf(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function code11(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function code128(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function code16k(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function code2of5(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function code32(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function code39(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function code39ext(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function code49(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function code93(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function code93ext(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function codeone(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function coop2of5(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function daft(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function databarexpanded(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function databarexpandedcomposite(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function databarexpandedstacked(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function databarexpandedstackedcomposite(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function databarlimited(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function databarlimitedcomposite(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function databarlomni(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function databaromnicomposite(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function databarstacked(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function databarstackedcomposite(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function databarstackedomni(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function databarstackedomnicomposite(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function databartruncated(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function databartruncatedcomposite(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function datalogic2of5(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function datamatrix(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function datamatrixrectangular(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function datamatrixrectangularextension(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function dotcode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function ean13(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function ean13composite(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function ean14(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function ean2(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function ean5(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function ean8(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function ean8composite(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function flattermarken(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function gs1_128(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function gs1_128composite(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function gs1_cc(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function gs1datamatrix(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function gs1datamatrixrectangular(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function gs1dotcode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function gs1northamericancoupon(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function gs1qrcode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function hanxin(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function hibcazteccode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function hibccodablockf(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function hibccode128(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function hibccode39(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function hibcdatamatrix(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function hibcdatamatrixrectangular(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function hibcmicropdf417(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function hibcpdf417(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function hibcqrcode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function iata2of5(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function identcode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function industrial2of5(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function interleaved2of5(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function isbn(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function ismn(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function issn(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function itf14(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function japanpost(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function kix(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function leitcode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function mailmark(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function matrix2of5(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function maxicode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function micropdf417(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function microqrcode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function msi(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function onecode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function pdf417(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function pdf417compact(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function pharmacode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function pharmacode2(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function planet(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function plessey(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function posicode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function postnet(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function pzn(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function qrcode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function rationalizedCodabar(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function raw(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function rectangularmicroqrcode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function royalmail(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function sscc18(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function symbol(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function telepen(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function telepennumeric(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function ultracode(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function upca(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function upcacomposite(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function upce(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;
    export function upcecomposite(canvas: string | HTMLCanvasElement, opts: BWIPJSOptions): HTMLCanvasElement;

    export const BWIPJS_VERSION: string;
    export const BWIPP_VERSION: string
}

declare function BwipJs(req: Request, res: Response, opts?: BwipJs.BwipJSOptionsWithBCID): void;

/**
 * The Browser version of the library's functionality, which makes use of an HTMLCanvasElement for rendering.
 * @param canvas ID string or HTML element of the canvas to render within
 * @param opts Options to use for rendering
 * @param callback Function to execute when rendering has completed or failed
 */
declare function BwipJs(
    canvas: string | HTMLCanvasElement,
    opts: BwipJs.BwipJSOptionsWithBCID,
    callback: (err: undefined | string | Error, canvas?: HTMLCanvasElement) => void,
): void;

export = BwipJs;
