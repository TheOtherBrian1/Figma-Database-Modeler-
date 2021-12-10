const sendFigmaMessage = store => next => action => {
    console.log(action.type, action.payload);
    //* is the url that connects the two workers
    parent.postMessage({ pluginMessage: action }, '*');
    let result = next(action)
    return result
}

export default sendFigmaMessage;