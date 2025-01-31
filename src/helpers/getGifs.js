export const getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=q9M5gJY6vJIhP4X24oYtsp2VWvRbluGg&q=${category}&limit=5`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    } ))

    console.log(gifs);
    return gifs;

}