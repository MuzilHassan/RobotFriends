import React from 'react';
import Scroll from './Scroll';
import CardList from './CardList';
import Searchbox from './Searchbox';
import './App.css';

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            Searchfeild: ''

        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(reponse => reponse.json()).then(user => this.setState({ robots: user }))
            ;
    }
    onSearchChange = (event) => {
        this.setState({ Searchfeild: event.target.value })

    }
    render() {
        const filterSearch = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.Searchfeild.toLowerCase());

        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        }
        else {
            return (
                <div className='tc' >
                    <h1 className="bbbb">RoboFriends</h1>
                    < Searchbox change={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterSearch} />
                    </Scroll>
                </div>
            )

        }

    }


}



export default App;