import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, info) {
        this.setState({
            error: error,
            errorInfo: info
        });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </div>
            );
        }
        return this.props.children;
    }

}

export default ErrorBoundary;