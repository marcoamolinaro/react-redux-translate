import React from 'react';

class App extends React.Component {

    state = { language: 'english' };

    onLanguageChange = language => {
        this.setState({ language });
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
                    <i className="flag br" onClick={() => this.onLanguageChange('portuguese')}/>
                    <i className="flag it" onClick={() => this.onLanguageChange('italian')}/>
                    <i className="flag de" onClick={() => this.onLanguageChange('german')}/>
                    <i className="flag jp" onClick={() => this.onLanguageChange('japanese')}/>
                    <i className="flag cn" onClick={() => this.onLanguageChange('chinese')}/>
                    <i className="flag kr" onClick={() => this.onLanguageChange('korean')}/>
                </div>
                {this.state.language}
            </div>
        );
    }
}

export default App;