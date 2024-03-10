import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddForum from './AddForum.tsx';
import App from './App.tsx';
import FlashCards from './FlashCards.tsx';
import './index.css';
import Layout from './Layout.tsx';
import QuestionList from './QuestionList.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/card/:id",
    element: (
      <Layout>
        <FlashCards />
      </Layout>
    ),
  },
  {
    path: "/addCard",
    element: (
      <Layout>
        <AddForum />
      </Layout>
    ),
  },
  {
    path: "/questionList/:id",
    element: (
      <Layout>
        <QuestionList/>
      </Layout>
    )
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
