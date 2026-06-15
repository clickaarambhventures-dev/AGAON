const fs = require('fs');
const path = require('path');

function checkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
        
        const fullPath = path.join(dir, file);
        if (/[:*?"<>|]/.test(file) || file.length > 150) {
            console.log("INVALID:", fullPath);
        }
        
        if (fs.statSync(fullPath).isDirectory()) {
            checkDir(fullPath);
        }
    }
}

checkDir('.');
