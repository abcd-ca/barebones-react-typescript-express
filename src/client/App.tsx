import React from 'react';
import {TestBox} from './TestBox'

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      name: null,
    };
  }

  async componentDidMount() {
    try {
      let r = await fetch('/api/hello');
      let name = await r.json();
      this.setState({ name });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <main className='container my-5'>
        <img src="img/logo.png" width="100" />
        <h1 className='text-primary text-center'>Well hello, {this.state.name}!</h1>
        <TestBox text={'Click to grow'} />
      </main>
    );
  }
}

export interface IAppProps {}

export interface IAppState {
  name: string;
}

export default App;
