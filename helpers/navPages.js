
module.exports = (albums, pages, options) => {
    const albumPages = albums.filter(album => pages.includes(album.title));
    return albumPages.map(albumPage => {
        return `<a class="page" href="${albumPage.url}">${albumPage.title.slice(1)}</a>`;
    }).join("");
}
