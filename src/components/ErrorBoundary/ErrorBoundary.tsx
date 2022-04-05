/* eslint-disable react/state-in-constructor */
import React, { Component, ErrorInfo, ReactNode } from 'react';
import Error from '../../pages/Error';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    return `Uncaught error:', ${error}, ${errorInfo}`;
  }

  public render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <Error />;
    }

    return children;
  }
}

export default ErrorBoundary;
