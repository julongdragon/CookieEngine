
varying vec2 vUv;
varying vec3 vPos;

void main()	{
	vUv = uv;
	vec3 pos = position;
	// pos *= 10.;
	vPos = pos;
	gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.);
}
