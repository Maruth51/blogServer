const faker = require("faker");
const Author = require("../Models/AuthorModel");
const Post = require("../Models/PostModel");
const seedPosts = () => {
  const blogData = [
    {
      author: "Dani",
      posts: [
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        }
      ]
    },
    {
      author: "John",
      posts: [
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        }
      ]
    },
    {
      author: "Sam",
      posts: [
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        }
      ]
    }
  ];

  blogData.forEach(item => {
    const author = new Author({
      name: item.author
    });

    author
      .save()
      .then(response => {
        const authorId = response._id;
        if (authorId) {
          item.posts.forEach(post => {
            const newPost = new Post({
              title: post.title,
              content: post.content,
              author: authorId
            });
            newPost
              .save()
              .then(res => {
                console.log("success");
              })
              .catch(console.log("error"));
          });
        }
      })
      .catch(err => console.error);
  });
};

seedPosts();

module.exports = seedPosts;
