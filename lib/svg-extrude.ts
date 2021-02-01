import * as THREE from "three";
import SVGLoader from "three/examples/jsm/loaders/SVGLoader";

export default function extrudeSvg(path: string): Promise<THREE.Group> {
  return new Promise((resolve, reject) => {
    const loader = new SVGLoader();

    loader.load(path, data => {
      const paths = data.paths;

      const group = new THREE.Group();
      group.scale.multiplyScalar(0.02);
      group.scale.y *= -1;

      for (const path of paths) {
        // fills
        const fillColor = path.userData.style.fill;

        if (fillColor !== undefined && fillColor !== "none") {
          const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color().setStyle(fillColor),
            opacity: path.userData.style.fillOpacity,
            transparent: path.userData.style.fillOpacity < 1,
            side: THREE.DoubleSide,
            depthWrite: false
          });

          const shapes = path.toShapes(true);

          for (const shape of shapes) {
            const geometry = new THREE.ExtrudeBufferGeometry(shape, {depth: 0.2, bevelEnabled: false});
            const mesh = new THREE.Mesh(geometry, material);

            group.add(mesh);
          }
        }

        // strokes
        const strokeColor = path.userData.style.stroke;

        if (strokeColor !== undefined && strokeColor !== "none") {
          const material = new THREE.MeshBasicMaterial( {
            color: new THREE.Color().setStyle(strokeColor),
            opacity: path.userData.style.strokeOpacity,
            transparent: path.userData.style.strokeOpacity < 1,
            side: THREE.DoubleSide,
            depthWrite: false
          });

          for (const subPath of path.subPaths) {
            const geometry = SVGLoader.pointsToStroke(subPath.getPoints(), path.userData.style);

            if (geometry) {
              const mesh = new THREE.Mesh(geometry, material);

              group.add(mesh);
            }
          }
        }
      }

      resolve(group);
    });
  });
}
