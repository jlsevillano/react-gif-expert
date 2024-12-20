export const getGifs = async (category) => {
    // const url = `https://api.giphy.com/v1/gifs/search?api_key=kS3r3MR3Q2wyzldc8Qhizk80uVQDlfrm&q=${category}&limit=10`;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=G3e6mai31C1V0JpHTQ7VIndaMRN4FVdA&q=${category}&limit=12`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    // console.log(data);
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    // console.log(gifs);
    return gifs;
}