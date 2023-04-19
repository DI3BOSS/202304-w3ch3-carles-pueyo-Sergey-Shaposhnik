import { type ComponentStructure } from "../../types/types";

abstract class Component implements ComponentStructure {
  element: Element;

  constructor(parentElement: Element, tagName: string) {
    this.element = document.createElement(tagName);

    parentElement.appendChild(this.element);
    this.renderHtml();
  }

  abstract renderHtml(): void;
}
