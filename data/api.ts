/// <reference path="data.ts" />

const API = (function () {

	const timeout = () => Math.random() * 100

	const wrapWithPromise = <T>(fn: Function) =>
		(...args): Promise<T> => {
			return new Promise((resolve, reject) =>
				setTimeout(() => resolve(fn(...args)), timeout())
			)
		}

	const getEmployee: (id: number) => Promise<Employee>
		= wrapWithPromise(db.getEmployeeById);

	const getEmployeesByNationality: (nat: Nationality) => Promise<Employee[]>
		= wrapWithPromise(db.getEmployeesByNationality);

	const getNationalities: () => Promise<Nationality[]>
		= wrapWithPromise(db.getNationalities)

	return {
		// getEmployee(id): thenable
		getEmployee,
		// getEmployeesByNationality(nationality): thenable
		getEmployeesByNationality,
		// getNationalities(): thenable
		getNationalities,
	}
}());
