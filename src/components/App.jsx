import { Component } from 'react';

import { fetchBreeds, fetchDogByBreed } from 'api';
import { Dog } from './Dog';
import { BreedSelect } from './BreedSelect';

import { BeatLoader } from 'react-spinners';
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
    isLoadingDog: false,
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
      this.setState({ isLoadingDog: true });
      const dog = await fetchDogByBreed(breedId);
      this.setState({ dog });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoadingDog: false });
    }
  };

  render() {
    const { dog, error, breeds, isLoadingDog } = this.state;
    return (
      <>
        <BreedSelect breeds={breeds} onSelect={this.selectBreed} />

        <BeatLoader
          color="blue"
          loading={isLoadingDog}
          size={15}
          aria-label="Loading Spinner"
        />

        {error && <div>Oh... something went wrong</div>}
        {dog && <Dog dog={dog} />}
      </>
    );
  }
}
