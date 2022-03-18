import React, { useState } from 'react'; // use === Hook
import Gif from './Gif';
import SearchBar from './SearchBar';
import GifList from './GifList';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  const [selectedID, setSelectedID] = useState("13HgwGsXF0aiGY");
  const [gifIDs, setGifIDs] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);
  // const selectedID = "13HgwGsXF0aiGY";
  // const gifIDs = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];

  const changeGifs = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      // console.log(res.data.map((gif) => gif.id));
      const gifs = res.data.map((gif) => gif.id);
      setGifIDs(gifs);
    });
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar changeGifs={changeGifs} />
        <div className="selected-gif">
          <Gif gifID={selectedID} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIDs={gifIDs} setSelectedID={setSelectedID} />
      </div>
    </div>
  );
};

export default App;
