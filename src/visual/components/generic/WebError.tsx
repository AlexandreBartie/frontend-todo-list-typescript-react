import React, { Component, ErrorInfo } from "react"

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
  }

  render(): React.ReactNode {
    const { hasError, error } = this.state

    if (hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{error?.message}</p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
