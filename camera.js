"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function canCoverRange(desiredDistanceRange, desiredLightLevelRange, cameras) {
    var distanceCovered = [];
    var lightLevelCovered = [];
    // Mark which distances and light levels are covered
    for (var _i = 0, cameras_1 = cameras; _i < cameras_1.length; _i++) {
        var camera = cameras_1[_i];
        for (var d = camera.distanceRange[0]; d <= camera.distanceRange[1]; d++) {
            distanceCovered[d] = 1;
        }
        for (var l = camera.lightLevelRange[0]; l <= camera.lightLevelRange[1]; l++) {
            lightLevelCovered[l] = 1;
        }
    }
    // Check if all required distances are covered
    for (var d = desiredDistanceRange[0]; d <= desiredDistanceRange[1]; d++) {
        if (!distanceCovered[d]) {
            return false;
        }
    }
    // Check if all required light levels are covered
    for (var l = desiredLightLevelRange[0]; l <= desiredLightLevelRange[1]; l++) {
        if (!lightLevelCovered[l]) {
            return false;
        }
    }
    return true;
}
// Setup readline interface for user input
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Helper function to ask questions
var askQuestion = function (question) {
    return new Promise(function (resolve) { return rl.question(question, resolve); });
};
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var desiredDistanceRange, _a, minDistance, maxDistance, desiredLightLevelRange, _b, minLightLevel, maxLightLevel, cameraCount, cameras, i, cameraDistanceRange, _c, camMinDistance, camMaxDistance, cameraLightLevelRange, _d, camMinLightLevel, camMaxLightLevel, result;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, askQuestion('Enter the desired distance range (e.g., 1,10): ')];
                case 1:
                    desiredDistanceRange = _e.sent();
                    _a = desiredDistanceRange.split(',').map(Number), minDistance = _a[0], maxDistance = _a[1];
                    return [4 /*yield*/, askQuestion('Enter the desired light level range (e.g., 1,5): ')];
                case 2:
                    desiredLightLevelRange = _e.sent();
                    _b = desiredLightLevelRange.split(',').map(Number), minLightLevel = _b[0], maxLightLevel = _b[1];
                    return [4 /*yield*/, askQuestion('How many cameras do you want to input? ')];
                case 3:
                    cameraCount = _e.sent();
                    cameras = [];
                    i = 0;
                    _e.label = 4;
                case 4:
                    if (!(i < parseInt(cameraCount))) return [3 /*break*/, 8];
                    return [4 /*yield*/, askQuestion("Enter the distance range for camera ".concat(i + 1, " (e.g., 1,5): "))];
                case 5:
                    cameraDistanceRange = _e.sent();
                    _c = cameraDistanceRange.split(',').map(Number), camMinDistance = _c[0], camMaxDistance = _c[1];
                    return [4 /*yield*/, askQuestion("Enter the light level range for camera ".concat(i + 1, " (e.g., 1,3): "))];
                case 6:
                    cameraLightLevelRange = _e.sent();
                    _d = cameraLightLevelRange.split(',').map(Number), camMinLightLevel = _d[0], camMaxLightLevel = _d[1];
                    cameras.push({
                        distanceRange: [camMinDistance, camMaxDistance],
                        lightLevelRange: [camMinLightLevel, camMaxLightLevel]
                    });
                    _e.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 4];
                case 8:
                    result = canCoverRange([minDistance, maxDistance], [minLightLevel, maxLightLevel], cameras);
                    // Output the result
                    if (result) {
                        console.log('The cameras can cover the desired range.');
                    }
                    else {
                        console.log('The cameras cannot cover the desired range.');
                    }
                    // Close the readline interface
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(function (err) { return console.error(err); });
