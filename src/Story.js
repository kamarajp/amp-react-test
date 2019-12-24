import React, { Component } from 'react';
import { ampStoriesHead, ampStoriesEnd } from './AmpElements';

class Story extends Component {
    componentDidMount() {
        const { storyContent } = this.props;
        const ampStoriesBodyStart = `<amp-story standalone
                      title=${storyContent.title}
                      publisher=${storyContent.publisher}
                      publisher-logo-src=${storyContent.publisher_logo}
                      poster-portrait-src=${storyContent.poster_potrait}
                  >`;
        const ampStories = storyContent.stories
            .map((story) => {
                return `<amp-story-page id='page-${story.id}'>
                    <amp-story-grid-layer template='fill'>
                    <amp-img src='${story.img}'
                        animate-in="fly-in-right"
                        animate-in-duration=".5s"
                        width='720' height='1280'
                        layout='responsive'>
                    </amp-img>
                    </amp-story-grid-layer>
                    <amp-story-grid-layer template='vertical' class='bottom'>
                    <h1>${story.title}</h1>
                    <p>${story.content}</p>
                    </amp-story-grid-layer>
                </amp-story-page>`;
            })
            .join('');
        const ampStoriesBodyEnd = `</amp-story>`;

        const ampStoriesHtml = ampStoriesHead + ampStoriesBodyStart + ampStories + ampStoriesBodyEnd + ampStoriesEnd;

        const iframeView = document.getElementById('stories-iframe');
        const iframeContent = iframeView.contentDocument || iframeView.contentWindow.document;
        iframeContent.open();
        iframeContent.write(ampStoriesHtml);
        iframeContent.close();
    }

    render() {
        return <iframe id='stories-iframe' title='AMP Story' width='400px' height='500px' />;
    }
}

export default Story;
