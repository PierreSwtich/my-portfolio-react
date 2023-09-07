import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error here or perform other actions
    console.error(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render an error message or component here
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;