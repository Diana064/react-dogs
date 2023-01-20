import { Component } from 'react';

import { fetchBreeds, fetchDogByBreed } from 'api';
import { Dog } from './Dog';
import { BreedSelect } from './BreedSelect';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

export class App extends Component {
  state = {
    breeds: [],
    error: null,
    dog: null,
  };
  async componentDidMount() {
    try {
      const breeds = await fetchBreeds();
      this.setState({ breeds });
      console.log(breeds);
    } catch (error) {}
  }

  selectBreed = async breedId => {
    try {
      const dog = await fetchDogByBreed(breedId);
      this.setState({ dog });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    const { dog, error, breeds } = this.state;
    return (
      <>
        <BreedSelect breeds={breeds} onSelect={this.selectBreed} />

        {error && <div>Oh... something went wrong</div>}
        {dog && <Dog dog={dog} />}
      </>
    );
  }
}
