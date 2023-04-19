import ListComponent from "./components/ListComponent/ListComponent.js";
import series from "./series/series.js";

const app = document.querySelector(".container")!;
new ListComponent(app, series, "series");
