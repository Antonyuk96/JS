const albums = [
    { title: "Album1", artist: "Artist1", year: 2000 },
    { title: "Album2", artist: "Artist2", year: 2015 },
    { title: "Album3", artist: "Artist3", year: 2020 },
];

const musicCollection = {
    albums: [...albums],
    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next: () => {
                if (index < this.albums.length) {
                    return {
                        value: this.albums[index++],
                        done: false,
                    };
                } else return { done: true };
            }
        }
    }
}

for (let album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}