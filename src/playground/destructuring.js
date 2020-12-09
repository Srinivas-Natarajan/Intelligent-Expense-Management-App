const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-published' } = book.publisher;

console.log(publisherName);