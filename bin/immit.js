#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { initAider } = require('../src/tools/aider');

const args = process.argv.slice(2);
const command = args[0];
let projectDir = process.env.IMMIT;

if (!command) {
    console.error('Please specify a command (e.g., "immit aider" or "immit aider /path/to/project")');
    process.exit(1);
}

// If first arg after command isn't a known command, treat it as project dir
if (args[1] && !['aider'].includes(args[1])) {
    projectDir = args[1];
}

switch (command) {
    case 'aider':
        initAider(projectDir);
        break;
    default:
        console.error(`Unknown command: ${command}`);
        process.exit(1);
}