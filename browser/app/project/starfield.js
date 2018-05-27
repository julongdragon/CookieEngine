
import * as THREE from 'three.js';
import assets from '../engine/assets';
import Geometry from '../engine/geometry';

export default class Starfield extends THREE.Object3D {

	constructor() {
		super();

		this.uniforms = {
			time: { value: 0 },
		}

		var countResolution = 32;
		this.uniforms.indexResolution = { value: countResolution };
		var material = assets.shaders.star.clone();
		material.side = THREE.FrontSide;
		material.uniforms = this.uniforms;
		material.needsUpdate = true;
		assets.shaders.star.cloned.push(material);
		var geometries = Geometry.create(Geometry.randomPositionAttribute(countResolution*countResolution));
		geometries.forEach(geo => {
			var mesh = new THREE.Mesh(geo, material);
			mesh.frustumCulled = false;
			this.add(mesh);
		});
	}

	update (elapsed) {
		this.uniforms.time.value = elapsed;
	}
}