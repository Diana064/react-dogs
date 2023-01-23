import { Component } from 'react';
import Select from 'react-select';
import { fetchBreeds } from 'api';
import { ErrorMessage } from './ErrorMessage';

// ({ breeds, onSelect })
export class BreedSelect extends Component {
  state = {
    breeds: [],
    error: null,
    isLoading: false,
  };
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const breeds = await fetchBreeds();
      this.setState({ breeds });
      console.log(breeds);
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  buildOptions = () => {
    return this.state.breeds.map(breed => ({
      value: breed.id,
      label: breed.name,
    }));
  };
  render() {
    const { error, isLoading } = this.state;
    const { onSelect } = this.props;
    const options = this.buildOptions();

    return (
      <div>
        <Select
          isLoading={isLoading}
          options={options}
          onChange={option => onSelect(option.value)}
        />
        {error && <ErrorMessage />}
      </div>
    );
  }
}
