import { Component } from 'react';

export default class ProdErrorBoundary extends Component {
  state = { err: null };
  static getDerivedStateFromError(err) { return { err }; }
  componentDidCatch(err, info) { console.error('Runtime error:', err, info); }

  render() {
    if (this.state.err) {
      return (
        <div style={{ padding: 24, color: '#fff' }}>
          <h2>Something went wrong.</h2>
          <p>Check the browser console for details.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
