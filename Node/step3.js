const fs = require('fs');
const process = require('process');
const axios = require('axios');



function handleOutput(text, out) {
    if (out) {
        fs.writeFile(out, text, 'utf8', function (err) {
            if (err) {
                console.error(`Couldnt write ${out}: ${err}`);
                process.exit(1);
            }
        });
    } else {
        console.log(text); 
    }
}

function cat(path) {
    fs.readFile(path, utf8, function (err, data) {
        if (err) {
            console.log(`ERROR reading ${path}: ${err}`);
            process.exit(1);
        } else {
            console.log(data);
        };
    });
}

async function webCat(url) {
    try {
        let res = await axios.get(url);
        console.log(res.data);
    } catch(err) {
        console.log(`ERROR fetching ${url}: ${err}`)
        process.exit(1); 
    }
}

let path;
let out; 


if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
} else {
    path = process.argv[2]; 
}


if (path.slice(0, 4) === 'http') {
    webCat(path, out)
} else {
    cat(path, out); 
}