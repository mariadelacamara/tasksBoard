// import { create } from "apisauce";

// const api = create({
//   baseURL: "http://lorem-faker.vercel.app",
//   headers: {},
// });

//TODO: Connect with real API. This is a mocked api with promises because I had CORS policy issues with the Title endpoint.

const mockedTasks = [
  { title: "perspiciatis iusto nobis", id: 1 },
  { title: "occaecati quas et", id: 2 },
  { title: "natus nemo qui", id: 3 },
  { title: "sint aut sit", id: 4 },
  { title: "et beatae qui", id: 5 },
  { title: "nostrum vitae soluta", id: 6 },
  { title: "saepe ut sed", id: 7 },
  { title: "libero officiis ea", id: 8 },
  { title: "vel laudantium culpa", id: 9 },
  { title: "atque quasi omnis", id: 10 },
  { title: "neque quo harum", id: 11 },
  { title: "reprehenderit in amet", id: 12 },
  { title: "qui quasi nisi", id: 13 },
  { title: "animi voluptas fuga", id: 14 },
];

export const getTasks = () =>
  new Promise((resolve, reject) => {
    if (!mockedTasks) {
      reject(new Error("Tasks not found"));
    }
    resolve(mockedTasks);
  });
