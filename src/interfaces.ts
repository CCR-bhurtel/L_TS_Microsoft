interface Person {
    firstName: string;
    lastName: string;
    age: number;
    gender?: 'M' | 'F' | 'O';
    fullName(): string;
    readonly bio: string;
}

const person1: Person = {
    firstName: 'Alan',
    lastName: 'Markonikov',
    age: 12,
    fullName(): string {
        return this.firstName + ' ' + this.lastName;
    },
    gender: 'M',
    bio: `Hey there ${firstName} here`,
};

// Extending interface
console.log(person1.bio);
interface Hispanic extends Person {
    hasHat: boolean;
}

const juan: Hispanic = {
    firstName: 'Alan',
    lastName: 'Markonikov',
    age: 12,
    fullName(): string {
        return this.firstName + ' ' + this.lastName;
    },
    gender: 'M',
    bio: `Hey there ${firstName} here`,
    hasHat: true,
};

// calling exernal apis
const fetchURL = 'https://jsonplaceholder.typicode.com/posts';
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id);
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? 'Administrator' : post.userId.toString()));
    console.log('Title: ' + post.title);
    console.log('Body: ' + post.body);
}

showPost();
