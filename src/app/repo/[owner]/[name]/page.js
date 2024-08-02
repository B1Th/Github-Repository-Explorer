import Link from "next/link";
import RepoDetails from "../../../../components/RepoDetails";

export default function RepoDetailsPage({ params, searchParams }) {
  return (
    <div>
      <Link href={`/?user=${searchParams.user}`}>Back to Repository List</Link>
      <RepoDetails owner={params.owner} name={params.name} />
    </div>
  );
}
