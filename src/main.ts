import { Plugin } from "obsidian";
import p5 from "p5";

export default class P5Plugin extends Plugin {
  async onload() {
    this.registerMarkdownCodeBlockProcessor("p5", (src, el, _ctx) => {
      const container = el.createDiv();

      const functionBody = `
        with (p) {
          ${src}
          p.setup = setup;
          p.draw = draw;
        }
      `;

      try {
        new p5(
          // eslint-disable-next-line @typescript-eslint/no-implied-eval
          new Function("p", functionBody) as (p: p5) => void,
          container,
        );
      } catch (error) {
        container.empty();

        const { message, stack } = error as Error;
        const errorContainer = container.createEl("pre");

        errorContainer.className = "__error-container";
        errorContainer.textContent = stack ?? `Error: ${message}`;
      }
    });
  }

  onunload() {}
}
