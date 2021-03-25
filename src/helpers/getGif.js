
export const getGif = async (nameGif) => {

    try {

        const apiKey = 'MkU9zPFlOKrakE34yckBUmgRJ51UInx9'

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${nameGif}&limit=50`

        const res = await fetch(url)

        const { data } = await res.json()

        //console.log(data)

        const arrayData = data.map(gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images.original.url
            }
        })

        return arrayData

    } catch (e) {

        alert("Hubo un error en el servidor", e)

    }








}
