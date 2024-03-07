const fs = require('fs');

module.exports = (album, breadcrumbs, options) => {
    const mdFilePath = album.home ? '/work/albums/text.md' :
        breadcrumbs.length == 1 ? `/work/albums/${album.title}/text.md` :
            `/work/albums/${breadcrumbs.slice(1).map(album => album.title).join("/")}/${album.title}/text.md`
    try {
        var md = fs.readFileSync(mdFilePath,
            { encoding: 'utf8', flag: 'r' });


        return `<div id="md"></div>
    <script>
    document.getElementById('md').innerHTML =
      marked.parse(\`${md}\`);
    </script>
    `;
    } catch (e) {
        return;
    }
}
