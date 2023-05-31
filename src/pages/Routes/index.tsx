import React, { useState } from "react";
import Main from "..";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookMark from "../BookMark";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bookmark" element={<BookMark />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default PageRoute;
