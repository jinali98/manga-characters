import { Component } from "react";
import "./App.css";
import CardList from "./components/cardList/card-list.component";
import Search from "./components/search/search.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      manga: [],
      seachText: "",
    };
  }

  componentDidMount() {
    fetch("https://api.jikan.moe/v3/manga/1/characters")
      .then((res) => res.json())
      .then((data) => {
        const mangaData = data.characters;
        this.setState({ manga: mangaData });
      })
      .catch((err) => console.log(err.message));
  }

  searchInputChangeHandler = (e) => {
    this.setState({ seachText: e.target.value });
  };

  render() {
    const { manga, seachText } = this.state;
    console.log(seachText);
    const filteredManga = manga.filter((toon) =>
      toon.name.toLowerCase().includes(seachText.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Manga Characters</h1>
        <Search searchInputChangeHandler={this.searchInputChangeHandler} />
        <CardList mangaList={filteredManga} />
      </div>
    );
  }
}

export default App;
