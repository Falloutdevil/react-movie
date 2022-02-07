import React from 'react';
import {Movies} from '../components/Movies';
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=8ec9e60d&s=avengers')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8ec9e60d&s=${str}${type !== 'all' ? `&type=${type}` : ''}`
        )
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render() {
        const {movies, loading} = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies}/>
                {loading ? <Preloader/> : <Movies movies={this.state.movies}/>}
            </main>
        )
    }


}

export {Main}