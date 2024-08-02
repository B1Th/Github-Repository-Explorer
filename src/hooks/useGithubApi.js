"use client";

import { useState, useEffect, useCallback } from "react";

const cache = {};

export default function useGithubApi(url, initialData = null) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = useCallback(async () => {
    if (cache[url]) {
      setData(cache[url]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${url}?page=${page}&per_page=10`);
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error("API rate limit exceeded. Please try again later.");
        }
        throw new Error("An error occurred while fetching the data.");
      }
      const newData = await response.json();
      setData((prevData) =>
        Array.isArray(prevData) ? [...prevData, ...newData] : newData
      );
      cache[url] = newData;
      setHasMore(newData.length === 10);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  return { data, loading, error, hasMore, loadMore };
}
