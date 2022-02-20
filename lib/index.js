#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var updater = require("update-notifier");
var init_1 = require("./init");
var program = new commander_1.Command();
var pkg = require('../package.json');
updater({ pkg: pkg }).notify();
program
    .command('init')
    .description('初始化工程')
    .action(init_1.default);
program.parse(process.argv);
