import { type ListComponentStructure, type Series } from "../../types/types";
import Component from "../Component/Component.js";

class ListComponent extends Component implements ListComponentStructure {
  series: Series;
  parentElement: Element;
  className: string;

  constructor(parentElement: Element, series: Series, className: string) {
    super(parentElement, "ul");
    this.series = series;
    this.className = className;
    this.renderHtml();
  }

  renderHtml() {
    this.element.className = this.className;
  }
}

export default ListComponent;
