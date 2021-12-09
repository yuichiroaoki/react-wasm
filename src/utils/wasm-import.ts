export const getWasmAgent = async () => {
	const module = await import('wasm');
	return module;
}

export const getWasmMemory = async () => {
	const module = await import('wasm/wasm_agent_bg.wasm');
	return module;
}