function generateHTML(array, selector) {
	const div = document.querySelector(selector)
	if (!div) {
		console.error(`${selector} element not found`)
		return
	}

	let innerHTML = ''
	array.forEach((a) => {
		innerHTML += `<div class="mm-job-item" href="https://www.mews.com/en/careers/jobs/${
			a.id
		}?gh_jid=${a.id}" data-id="${a.id}"><div class="mm-job-title">${
			a.title
		}</div><div class="mm-job-location">${
			a.location.name.length > 0 ? a.location.name : '-'
		}</div><a target="_blank" href="https://www.mews.com/en/careers/jobs/${
			a.id
		}?gh_jid=${
			a.id
		}&gh_src=053e8b92teu"><button class="button button--secondary job-track mm-job-button">Apply now</button></a></div>`
	})
	div.innerHTML = innerHTML
}

fetch(
	'https://boards-api.greenhouse.io/v1/boards/mewssystems/jobs?content=true'
)
	.then((res) => res.json())
	.then((data) => {
		const jobs = data.jobs
		generateHTML(jobs, '.jobs-wrapper')

		const tech_jobs = jobs.filter((a) => {
			const v = a.metadata[0].value
			return v && v[0] === 'Technical'
		})
		generateHTML(tech_jobs, '.tech-jobs-wrapper')
	})
