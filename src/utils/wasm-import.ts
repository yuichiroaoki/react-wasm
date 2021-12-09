export const getWasmModule = async () => {
	const init = await import('wasm-pkg');
	await init();
	const { initThreadPool } = init;
	await initThreadPool(navigator.hardwareConcurrency);
	return init;
}

export const getWasmMemory = async () => {
	const module = await import('wasm-pkg/wasm_bg.wasm');
	return module;
}