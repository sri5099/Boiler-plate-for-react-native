"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearAsync = exports.clearAccessToken = exports.getAccessToken = exports.setAccessToken = void 0;
const async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
const ACCESS_TOKEN = 'user';
const setAccessToken = async function (value) {
    async_storage_1.default.setItem(ACCESS_TOKEN, value);
};
exports.setAccessToken = setAccessToken;
const getAccessToken = async function () {
    let accessToken = '';
    let token = await async_storage_1.default.getItem(ACCESS_TOKEN);
    if (token !== null)
        accessToken = token;
    return accessToken;
};
exports.getAccessToken = getAccessToken;
const clearAccessToken = async function () {
    await async_storage_1.default.removeItem(ACCESS_TOKEN);
};
exports.clearAccessToken = clearAccessToken;
const clearAsync = async function () {
    async_storage_1.default.clear();
};
exports.clearAsync = clearAsync;
