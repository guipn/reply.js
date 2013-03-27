module.exports = function (interact, encoding) {
    process.stdin.resume();
    process.stdin.setEncoding(encoding || 'utf8');

    process.stdin.on('data', function (chunk) {
        process.stdout.write(interact(chunk));
    });
};
