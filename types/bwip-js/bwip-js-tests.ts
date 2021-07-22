import bwipjs = require("bwip-js");
import * as http from "http";
import * as fs from "fs";

bwipjs.loadFont("Inconsolata", 108, fs.readFileSync("fonts/Inconsolata.otf", "binary"));

http.createServer(function (req, res) {
    // If the url does not begin /?bcid= then 404.  Otherwise, we end up
    // returning 400 on requests like favicon.ico.
    if (req.url!.indexOf("/?bcid=") != 0) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("BWIPJS: Unknown request format.", "utf8");
    } else {
        bwipjs(req, res);
    }
}).listen(3030);

bwipjs.toBuffer(
    {
        bcid: "code128", // Barcode type
        text: "0123456789", // Text to encode
        scale: 3, // 3x scaling factor
        height: 10, // Bar height, in millimeters
        includetext: true, // Show human-readable text
        textxalign: "center", // Always good to set this
        textfont: "Inconsolata", // Use your custom font
        textsize: 13, // Font size, in points
    },
    function (err: string | Error, png: Buffer) {
        if (err) {
            console.log(err);
        } else {
            // `png` is a Buffer
            // png.length           : PNG file length
            // png.readUInt32BE(16) : PNG image width
            // png.readUInt32BE(20) : PNG image height
        }
    },
);

bwipjs
    .toBuffer({
        bcid: "code128", // Barcode type
        text: "0123456789", // Text to encode
        scale: 3, // 3x scaling factor
        height: 10, // Bar height, in millimeters
        includetext: true, // Show human-readable text
        textxalign: "center", // Always good to set this
        textfont: "Inconsolata", // Use your custom font
        textsize: 13, // Font size, in points
    })
    .then((png: Buffer) => {
        // `png` is a Buffer
        // png.length           : PNG file length
        // png.readUInt32BE(16) : PNG image width
        // png.readUInt32BE(20) : PNG image height
    })
    .catch((err: Error) => {
        console.log(err);
    });

// Browser canvas implementation
const canvas1 = document.createElement("canvas") as HTMLCanvasElement;
bwipjs(
    canvas1,
    {
        bcid: "qrcode",
        text: "example",
    },
    (err?: string | Error, cvs?: HTMLCanvasElement): void => {
        if (err) {
            err; // $ExpectType string | Error
        } else if (cvs) {
            cvs; // $ExpectType HTMLCanvasElement
        }
    },
);

// Browser canvas implementation using .toCanvas()
// See: https://github.com/metafloor/bwip-js#browser-usage
const canvas2 = document.createElement("canvas") as HTMLCanvasElement;
canvas2.setAttribute("id", "canvas2");
const toCanvas = bwipjs.toCanvas("canvas2", {
    bcid: "code128",
    text: "testing",
});
toCanvas; // $ExpectType HTMLCanvasElement

// Browser canvas implementation with exported symbology functions
// See: https://github.com/metafloor/bwip-js#browser-es6-module-usage
const canvas3 = document.createElement("canvas") as HTMLCanvasElement;
canvas3.setAttribute("id", "canvas3")

// $ExpectType HTMLCanvasElement
bwipjs.ean13(canvas3, {
    text: "example"
});
