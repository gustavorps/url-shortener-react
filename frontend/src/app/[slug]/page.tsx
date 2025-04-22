import React from "react";
import { redirect } from 'next/navigation';
import { url } from "inspector";

// Bug: Can not use useOne with nextjs-router and server
// TypeError: (0 , _refinedev_core__WEBPACK_IMPORTED_MODULE_2__.useOne) is not a function

interface IShortURL {
  url: string;
}

interface IShortURLData {
  short_urls_by_pk: IShortURL
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { slug } = await params;
  console.log("slug", slug);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SIMPLE_REST_URL}/short_urls/${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    console.log("response", response);
    console.log("response", response.url);
    return <div>Not Found</div>;
  }
  const data: IShortURLData = await response.json();
  console.log("data", data);
  if (!data?.short_urls_by_pk?.url) {
    return <div>Not Found</div>;
  } else {

  }
  redirect(data.short_urls_by_pk.url);
}
