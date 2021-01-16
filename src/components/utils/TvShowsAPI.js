import { BASE_API_URL } from "../../config.js";
import { of } from "rxjs";
import {
  debounceTime,
  switchMap,
  distinctUntilChanged,
  map,
  catchError,
} from "rxjs/operators";

async function showLookup(id) {
  return await fetch(`${BASE_API_URL}/shows/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("error", error));
}
async function showSearch(input) {
  return await fetch(`${BASE_API_URL}/search/shows?q=${input}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("error", error));
}

function searchEntries(term) {
  if (term === "") {
    return of([]);
  }
  return showSearch(term).pipe(
    map((res) => {
      return res;
    }),
    catchError(() => {
      return of([]);
    })
  );
}

function searchObservable(input) {
  console.log(input);
  console.log(input.asObservable());
  return input.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    switchMap((term) => searchEntries(term))
  );
}

export { showLookup, showSearch, searchObservable };
