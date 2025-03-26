import { useState, useEffect } from "react";

function App(){

  const [data, setData] = useState([]);

  const api = "https://picsum.photos/v2/list?limit=25"; 

  useEffect(() => {
    
    async function fetchData() {
      
      try{
        let response = await fetch(api);
        let output = await response.json();
        setData(output);
      }
      
      catch(err){
        console.error("Error", err);
      }

    }
    fetchData();
  }, []);

  async function copyToClipboard(url){
    
    try{

      const img = await fetch(url);
      const blob = await img.blob();

      const canvas = document.createElement("canvas");
      const canvastx = canvas.getContext("2d");

      const imageBitmap = await createImageBitmap(blob);
      canvas.width = imageBitmap.width;
      canvas.height = imageBitmap.height;
      canvastx.drawImage(imageBitmap, 0, 0);

      canvas.toBlob(async (pngBlob) => {
        await navigator.clipboard.write( [ new ClipboardItem( { "image/png" : pngBlob }) ] );
        alert("Image copied to clipboard!");
      }, "image/png");

    } 
    
    catch(err){
      console.error("Copy failed", err);
      alert("Failed to copy image.");
    }

  }

  return (

    <div className="Parent">

      <div className="Child">
        {
          data.map(details => 
            <div key={details.id} className="childCard">
              
              <a href={details.download_url} target="_blank">
                <img src={details.download_url} alt={`By ${details.author}`} className="image" />
              </a>
              
              <div className="childCard2">
                <p>{details.author}</p>
                <button className="copyButton" onClick={() => copyToClipboard(details.download_url)} >Copy</button>
              </div>

            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;