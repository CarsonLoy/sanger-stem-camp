function visitImages(node) {
  if (node.type === "image" && !/^(?:[a-z]+:|\/|#)/i.test(node.url)) {
    node.url = `/${node.url}`;
  }

  if (Array.isArray(node.children)) {
    node.children.forEach(visitImages);
  }
}

export default function remarkPublicImages() {
  return visitImages;
}
