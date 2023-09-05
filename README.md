This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## ABOUT APP

I created this project using Next.js. I used the Tailwind CSS library for styling and React Query for API fetching. First, I created a 'components' folder in the 'src' directory, alongside the 'app' folder. Then, I worked on the 'page.js' file inside the 'app' folder, keeping in mind that it would run on the client side. I added 'useClient' to enable client-side rendering and proceeded to import 'QueryClient' and 'QueryClientProvider.'

My approach involved creating a separate query for each page since the tasks were relatively straightforward. I wrapped my 'home' page with the 'QueryClientProvider' to manage queries for that page. I also imported 'useState,' defined it, and set it up to display the current page on the screen.

I designed the 'Navbar' component, which received a 'changePage' parameter. Inside this component, I created a 'nav' tag with two 'button' elements. I used the 'onClick' event to trigger the 'changePage' function, enabling the display of one of the two pages when clicked.

As the pages shared similar functionality, I'll summarize the process using the 'Characters' page as an example. I declared a variable named 'fetchCharacters,' which contained an asynchronous function. This function aimed to fetch data from an API URL and return it in JSON format.

Within the 'Characters' function, I used 'useQuery' to define 'data' and 'status' variables. 'useQuery' received parameters such as 'characters' and 'fetchCharacters' to manage the data fetching process.

Finally, I used the data retrieved to map and display characters' images, species, names, and genders.
