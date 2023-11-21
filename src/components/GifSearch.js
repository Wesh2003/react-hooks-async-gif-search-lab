

function GifSearch() {
        const [gif, setGif] = useState("");
      
        function handleSubmit(e) {
          e.preventDefault();
          const gifData= {
            name: gif, 
          }
      
          fetch ("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g", {
            method: "GET", 
            headers: {
              "Content-Type" : "pplication/json", 
            },
            body: JSON.stringify(itemData),
          }) 
            .then(r => r.json())
            .then((data) => {

            if (gifData.name === data.name){
                setGif(data.images.url)
            }
             }
            )
        }


    return (
              <form className="NewGif" onSubmit = {handleSubmit}>
                <label>
                  Gif search:
                  <input
                    type="text"
                    name="name"
                    value={gif}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
          
                <button type="submit">Search</button>
              </form>
    )
}

export default GifSearch;

