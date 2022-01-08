#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

import { Command } from 'commander'
import * as updater from 'update-notifier'

import init from './init'

const program = new Command()

// 自动更新提示
const pkg = require('../package.json')
updater({ pkg }).notify()

// 初始化工程模板
program
  .command('init')
  .description('初始化工程')
  .action(init)

program.parse(process.argv)
