export function Materia({ title, body, href  }) {
	return (
		<article className="card bg-primary-content w-4/5 h-full max-w-[373px] max-h-[140px] shadow-xl text-primary">
			<a aria-labelledby={title} aria-label={title} href={href} className="card-body cursor-pointer">
				<h2 className="card-title">{title}</h2>
				<p>{body}</p>
			</a>
		</article>
	)
}

