import { existsSync } from "node:fs";
import { resolve } from "node:path";
import process from "node:process";

function joinBase(base, path) {
  return `${base}/${path}`.replace(/\/{2,}/g, "/");
}

function missingImage(src, alt) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      className: ["missing-image"],
      role: "img",
      ariaLabel: `Image unavailable: ${alt || src}`,
    },
    children: [
      {
        type: "element",
        tagName: "span",
        properties: { className: ["missing-image__title"] },
        children: [{ type: "text", value: "Image not found" }],
      },
      {
        type: "element",
        tagName: "span",
        properties: { className: ["missing-image__description"] },
        children: [
          {
            type: "text",
            value: alt || "This image has not been added yet.",
          },
        ],
      },
      {
        type: "element",
        tagName: "code",
        properties: {},
        children: [{ type: "text", value: src }],
      },
    ],
  };
}

function visitImages(node, base) {
  if (Array.isArray(node.children)) {
    node.children = node.children.map((child) => {
      if (child.type !== "element" || child.tagName !== "img") {
        visitImages(child, base);
        return child;
      }

      const src = String(child.properties?.src ?? "");
      const alt = String(child.properties?.alt ?? "");
      const isRemote = /^(?:https?:)?\/\//.test(src) || src.startsWith("data:");
      const publicPath = src.replace(/^\//, "");

      if (
        !isRemote &&
        !existsSync(resolve(process.cwd(), "public", publicPath))
      ) {
        return missingImage(src, alt);
      }

      child.properties.src = isRemote ? src : joinBase(base, publicPath);
      child.properties.loading = "lazy";
      child.properties.decoding = "async";
      return child;
    });
  }
}

export default function rehypeActivityImages({ base = "/" } = {}) {
  return (tree) => visitImages(tree, base);
}
