"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHAINS = void 0;
const wallet_sdk_1 = require("@coinbase/wallet-sdk");
// @ts-ignore
const index_min_js_1 = require("@walletconnect/web3-provider/dist/umd/index.min.js");
const INFURA_ID = "3ff38b400e4a4593af89997fde20c30e";
exports.CHAINS = {
    ETH: {
        id: 1,
        name: "Ethereum Mainnet",
        symbol: "ETH",
    },
    BSC: {
        id: 56,
        name: "Binance Smart Chain",
        symbol: "BNB",
    },
    RINKEBY: {
        id: 4,
        name: "Rinkeby Testnet",
        symbol: "ETH",
    },
    FTM: {
        id: 250,
        name: "Fantom Opera",
        symbol: "FTM",
    },
    POLYGON: {
        id: 137,
        name: "Polygon",
        symbol: "MATIC",
    },
    ARBITRUM: {
        id: 42161,
        name: "Arbitrum",
        symbol: "ETH",
    },
    AVALANCHE: {
        id: 43114,
        name: "Avalanche",
        symbol: "AVAX",
    },
};
exports.default = {
    coinbasewallet: {
        package: wallet_sdk_1.default,
        options: {
            appName: "Web3 Connector",
            infuraId: INFURA_ID,
        },
    },
    walletconnect: {
        package: index_min_js_1.default,
        options: {
            infuraId: INFURA_ID,
            rpc: {
                1: "https://rpc.ankr.com/eth",
                56: "https://rpc.ankr.com/bsc",
                250: "https://rpc.ankr.com/fantom",
                137: "https://rpc.ankr.com/polygon",
                43114: "https://rpc.ankr.com/avalanche",
                42161: "https://rpc.ankr.com/arbitrum",
            },
        },
    },
};
