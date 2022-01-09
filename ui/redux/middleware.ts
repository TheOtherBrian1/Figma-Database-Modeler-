const sendFigmaMessage = store => next => action => {
    //* is the url that connects the two workers
    parent.postMessage({ pluginMessage: action }, '*');
    let result = next(action)
    return result
}

export default sendFigmaMessage;