import { useState, useEffect } from "react";
import Search from "../components/Search";
import { useSearchParams } from "next/navigation";
import RepoList from "../components/RepoList";

const Start = () => {
  const [username, setUsername] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const userParam = searchParams.get("user");
    if (userParam) {
      setUsername(userParam);
    }
  }, [searchParams]);

  const handleSearch = (searchTerm) => {
    setUsername(searchTerm);
  };

  return (
    <div className="w-screen flex justify-center items-center flex-col mt-24">
      <h1 className="text-5xl font-semibold">
        Get Started with GitHub Repository Explorer
      </h1>
      <p className="text-[#D9D9D9] opacity-90 mt-5">
        Type the github username below to view the list of their repositories
      </p>
      <Search onSearch={handleSearch} initialValue={username} />
      {username && <RepoList username={username} />}
    </div>
  );
};
export default Start;
