module.exports = findCommand(process.platform)

function findCommand(platform) {
    switch(platform) {
    case 'win32':
        return require('@jcansdale-test/dotnet-runtime-win-x64');
    case 'linux':
        return require('@jcansdale-test/dotnet-runtime-linux-x64');
    case 'darwin':
        return require('@jcansdale-test/dotnet-runtime-osx-x64');
    }
}
