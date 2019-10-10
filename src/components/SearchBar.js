import React from 'react';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      showOnlyInSotck: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterCallback = props.filterCallback;
  }

  handleChange(event) {
    this.setState({ filterText: event.target.value }, () =>
      this.filterCallback(this.state.filterText, this.state.showOnlyInSotck)
    );
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.filterText}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
