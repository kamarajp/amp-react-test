import React, { Component } from 'react';
import Story from './Story';
import './App.css';

class App extends Component {
    state = {
        storyContent: {
            title: 'Joy of Pets',
            publisher: 'AMP tutorials',
            publisher_logo: 'assets/AMP-Brand-White-Icon.svg',
            poster_potrait: 'assets/cover.jpg',
            stories: [
                { id: 1, img: 'assets/cover.jpg', title: 'The Joy of Pets', content: 'By AMP Tutorials' },
                {
                    id: 2,
                    img: 'assets/cat.jpg',
                    title: 'Cats',
                    content: "Dogs come when they're called. Cats take a message and get back to you. --Mary Bly"
                },
                {
                    id: 3,
                    img: 'assets/dog.jpg',
                    title: 'Dogs',
                    content:
                        'Dogs were probably the first tame animals. They have accompanied humans for some 10,000 years. Some scientists assert that all dogs, domestic and wild, share a common ancestor in the small South Asian wolf.'
                }
            ]
        },
        storyHtml: {
            content: ''
        }
    };
    render() {
        return (
            <div className='App'>
                <h1>Stories</h1>
                <Story storyContent={this.state.storyContent} />
            </div>
        );
    }
}

export default App;
