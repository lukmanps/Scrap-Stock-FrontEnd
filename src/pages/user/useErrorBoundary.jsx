import React, {Component} from 'react';
import ErrorHandler from './error-handler-page';

class ErrorBoundary extends Component {
    state = { hasError: false, error: null, errorInfo: null };

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true, error, errorInfo });
        // You can also log the error or send it to an error tracking service
        console.error(error, errorInfo);
      }

    render() {
        if(this.state.hasError){
            return <ErrorHandler error={this.state?.error} errorInfo={this.state?.errorInfo}/>
        }
        return this.props.children
    }
}

export default ErrorBoundary;