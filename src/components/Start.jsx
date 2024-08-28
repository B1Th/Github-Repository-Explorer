import { useState, useEffect } from "react";
import Search from "./repo/Search";
import { useSearchParams } from "next/navigation";
import RepoList from "../components/repo/RepoList";
import Heading from "./assets/Heading";
import Paragraph from "./assets/Paragraph";

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
    <div
      className="w-screen flex justify-center items-center flex-col mt-24"
      id="Start"
    >
      <Heading text="Get Started with GitHub Repository Explorer" />
      <Paragraph
        text={
          "Type the github username below to view the list of their repositories"
        }
        className="mt-5"
      />

      <Search onSearch={handleSearch} initialValue={username} />
      {username && <RepoList username={username} />}
    </div>
  );
};
export default Start;
