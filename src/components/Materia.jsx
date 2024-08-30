import { principalDir, $fs as fs, $os as os } from "@/pages/node.mjs"

export function Materia({ title, body, href  }) {
	console.log(os.arch())
	return (
		<article className="card bg-primary-content w-4/5 h-full max-w-[373px] max-h-[140px] shadow-xl text-primary">
			<a aria-labelledby={title} aria-label={title} href={href} className="card-body cursor-pointer">
				<h2 className="card-title">{title} - {os.hostname()}</h2>
				<p>{body}</p>
			</a>
		</article>
	)
}

