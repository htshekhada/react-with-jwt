import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
   this.props.onUserInput(this.refs.filterTextInput.value, this.refs.isActiveOnlyInput.checked);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
          />
        <p>
        <label>
          <input
            type="checkbox"
            checked={this.props.isActiveOnly}
            ref="isActiveOnlyInput"
            onChange={this.handleChange}
            />
          {' '}
          Only show products which are active
        </label>
        </p>
      </form>
    );
  }
}

export default SearchBar;