const https = require("https");
function getInput(url){
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (ans) => data += ans);
            res.on('end', () => {
                try{
                    resolve(JSON.parse(data));
                }
                catch(e){
                    reject(e);
                }
            })
        }).on('error', (error) => reject(error));
    })
}

function postOutput(url, token, results){
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(results);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        const req = https.request(url, options, (res) => {
            let responseData = "";
            res.on("data", ans => responseData += ans);
            res.on("end", () => resolve(responseData));
        })
        req.on("error", reject);
        req.write(data);
        req.end();
    })
}
async function main(){
    try{
        const input = await getInput("https://share.shub.edu.vn/api/intern-test/input");
        const data = input.data;
        const queries = input.query;
        const token = input.token;
        const n = data.length;
        const prefixSum = new Array(n).fill(0);
        const prefixSum2 = new Array(n).fill(0);
        prefixSum[0] = data[0];
        prefixSum2[0] = data[0];
        for(let i = 1; i < n; i++) {
            prefixSum[i] = prefixSum[i - 1] + data[i];
            prefixSum2[i] = prefixSum2[i - 1] + (i % 2 === 0 ? data[i] : -data[i]);
        }
        const results = [];
        for(const q of queries){
            const l = q.range[0];
            const r = q.range[1];
            if(q.type === "1"){
                const res = prefixSum[r] - (l > 0 ? prefixSum[l - 1] : 0);
                results.push(res);
            }
            else{
                const res = prefixSum2[r] - (l > 0 ? prefixSum2[l - 1] : 0);
                results.push(res);
            }
        }
        // console.log("results:", results);
        const output = await postOutput("https://share.shub.edu.vn/api/intern-test/output", token, results);
        console.log("output response: ", output);
    }
    catch(error){
        console.error("Error: ", error);
    }
}
main();