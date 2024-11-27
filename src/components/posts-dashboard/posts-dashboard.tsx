import { Component,State, h } from '@stencil/core';

@Component({
  tag: 'posts-dashboard',
  styleUrl: 'posts-dashboard.css',
  shadow: true,
})
export class AppHeader {
  @State() posts: Array<{ id: number; title: string; body: string }> = [];
  // Fetch posts data when the component loads
  async componentWillLoad() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    this.posts = data;
  }
  render() {
    return (
      <div>
      <header>
        <h1>Sanjeet Stencil Web App</h1>
      </header>
      {/* <div>
        {this.data.map(item => (
          <div>{item.name}</div>
        ))}
      </div> */}
       <h1>Posts Table</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.posts.map(post => ( //map() to dynamically generate <tr> rows for each post.
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
