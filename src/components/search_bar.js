import React, {Component} from 'react';

export default class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            term: ''
        };
    }

    render()
    {
        return (
          <div>
            <div>
                <label> Pesquisar: </label>
                <input onChange={
                      event => {
                          const term = event.target.value;
                          this.setState({ term });
                          this.props.onTermChange(term);                          
                      }
                    }
                    placeholder={this.props.default}
                  />
            </div>
          </div>
        );
    }
}
