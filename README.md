# Obsidian p5.js Plugin

A simple [Obsidian](https://obsidian.md/) plugin for previewing [p5.js](https://p5js.org/) sketches inside code blocks. (WIP)

## Usage

To render your sketches, wrap them inside `p5` code blocks as shown in the following example:

<pre>
```p5
function setup() {
  createCanvas(400, 400);
};

function draw() {
  background(220);
  ellipse(50, 50, 80, 80);
};
```
</pre>
