"use client";

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const ClientLayout = ({ children, user, userName }: any) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
