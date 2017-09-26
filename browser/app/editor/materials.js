

import * as THREE from 'three.js'
import { assets } from '../editor/assets';

export var materials = {};

var materialFromShaderNames = [ 'position', 'velocity' ];

var defaultUniforms = {
	time: { value: 1.0 },
	frameBuffer: { value: 0 },
	resolution: { value: [window.innerWidth, window.innerHeight] },
};

materials.setup = function ()
{
	for (var i = materialFromShaderNames.length - 1; i >= 0; i--) {
		var name = materialFromShaderNames[i];
		materials[name] = new THREE.ShaderMaterial( {
			uniforms: defaultUniforms,
			vertexShader: assets.shaders['screen.vert'],
			fragmentShader: assets.shaders[name+'.frag']
		})	
	}

	materials.particle = new THREE.ShaderMaterial( {
		uniforms: defaultUniforms,
		vertexShader: assets.shaders['particle.vert'],
		fragmentShader: assets.shaders['particle.frag'],
		side: THREE.DoubleSide
	})

	materials.text = new THREE.ShaderMaterial( {
		uniforms: defaultUniforms,
		vertexShader: assets.shaders['text.vert'],
		fragmentShader: assets.shaders['text.frag'],
		side: THREE.DoubleSide
	})

	materials.line = new THREE.ShaderMaterial( {
		uniforms: defaultUniforms,
		vertexShader: assets.shaders['line.vert'],
		fragmentShader: assets.shaders['line.frag'],
		side: THREE.DoubleSide
	})

	materials.point = new THREE.ShaderMaterial( {
		uniforms: defaultUniforms,
		vertexShader: assets.shaders['point.vert'],
		fragmentShader: assets.shaders['point.frag'],
		side: THREE.DoubleSide
	})
}