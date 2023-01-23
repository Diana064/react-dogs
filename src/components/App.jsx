import { Component } from 'react';

import { fetchDogByBreed } from 'api';
import { Dog } from './Dog';
import { BreedSelect } from './BreedSelect';
import { DogSkeleton } from './DogSkeleton';
import { ErrorMessage } from './ErrorMessage';

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
    const { dog, error, isLoadingDog } = this.state;
    return (
      <>
        <BreedSelect onSelect={this.selectBreed} />
        {error && <ErrorMessage />}

        {isLoadingDog && <DogSkeleton />}

        {dog && !isLoadingDog && <Dog dog={dog} />}
      </>
    );
  }
}
