import https from 'https';

https.get('https://randomuser.me/api/?nat=in&gender=female&results=5', (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        const parsed = JSON.parse(data);
        parsed.results.forEach((user, i) => {
            console.log(user.picture.large);
        });
    });
});
