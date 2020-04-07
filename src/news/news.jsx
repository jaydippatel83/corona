import React, { Component } from 'react';
import RSSParser from 'rss-parser';

class News extends Component {

    state = {
        newslist: null
    };

    Fetchdata() {
        let parser = new RSSParser(); 
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"; 
        (async () => {
            let feed = await parser.parseURL(CORS_PROXY + "http://rss.cnn.com/rss/edition.rss"); 
            this.setState({ newslist: feed.items });
        })()
    }

    componentDidMount() {
        this.Fetchdata();
    } 
    render() { 
        return (
            <div className="mt-4 col-lg-12 col-12">
                <h2 className="text-success mt-4">RSS Feed</h2>
                {this.state.newslist ? this.state.newslist.map((node,i) => {
                    return <ul key={i} className="list-group m-1">
                        <li className="list-group-item text-primary  d-flex justify-content-between" >
                            <p className="font-weight-bold col-lg-10">{node.title}</p>
                            <a className="col-lg-2 col-3 btn btn-primary pointer" href={node.link}>Read More</a>
                        </li>
                    </ul>
                }) : null}
            </div>
        );
    }
}
export default News;

