import { useQueryClient } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	const queryClient = useQueryClient();

	return (
		<div className="p-8">
			<div>
				<Link to="/" className="text-blue-500 underline">
					Home
				</Link>
				<Link to="/test" className="text-blue-500 underline">
					Test
				</Link>
				{/** biome-ignore lint/a11y/useButtonType: <testing> */}
				<button onClick={() => queryClient.clear()}>Clear Query Cache</button>
			</div>

			<p className="mt-4 text-lg">
				Edit <code>src/routes/index.tsx</code> to get started.
			</p>
		</div>
	);
}
