MutationObserver = window.MutationObserver || window.WebKitMutationObserver

const observer = new MutationObserver(function(mutations, observer) {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(mutationNode => {
            rpl = node => {
                if (node.nodeType === 3) {
                    const text = node.nodeValue
                    const replacedText = text.replace(/inancial(\s|-)Analyst/gmi, "ucking clown")
    
                    if (replacedText !== text) {
                        node.nodeValue=replacedText
                    }
                } else 
                    node.childNodes.forEach(rpl)
            }
            rpl(mutationNode)
        })
    })
})
observer.observe(document, {
    subtree: true,
    childList: true
})

for (let element of document.getElementsByTagName('*')) {
    element.childNodes.forEach(node => {
        if (node.nodeType === 3) {
            const text = node.nodeValue
            const replacedText = text.replace(/inancial(\s|-)Analyst/gmi, "ucking clown")

            if (replacedText !== text) 
                node.nodeValue=replacedText
        }
    })
}