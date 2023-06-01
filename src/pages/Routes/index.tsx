import React, { useState } from "react";
import Main from "..";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookMark from "../BookMark";
import Layout from "../../components/common/Layout";

const PageRoute = () => {
  const [queryClient] = useState<QueryClient>(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: Infinity,
            staleTime: 0,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/bookmark" element={<BookMark />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </QueryClientProvider>
  );
};

export default PageRoute;
