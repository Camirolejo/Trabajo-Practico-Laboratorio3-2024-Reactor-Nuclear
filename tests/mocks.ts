// Mocking the dependencies

export const mockTurbina = {
    
    porcentajeReduccion : jest.fn(),
    activo : jest.fn(),

}as any;

export const mockCombustible = {
    cantidadCombustible : 97,
    porcentajeAumentoTemperatura : jest.fn().mockReturnValue(0.2),
}as any;

export const mockSensor = {
    getTemperaturaReactor : jest.fn().mockReturnValue(100),
}as any;

export const mockNucleo = {
    sensor : mockSensor,
}as any;

export const mockGenerador = {
    
}as any;


export const mockReactor = {
    nucleo : mockNucleo,
    combustible : mockCombustible,
} as any;

export const mockSuscriptor = {
    actualizarTemperatura: jest.fn(),
} as any;

export const mockBuilder = {
    setCapacidad: jest.fn(),
    setCombustible: jest.fn(),
    setNucleo: jest.fn(),
    setGenerador: jest.fn(),
} as any;

export const newBuilder = {
    setCapacidad: jest.fn(),
    setCombustible: jest.fn(),
    setNucleo: jest.fn(),
    setGenerador: jest.fn(),
} as any;

export const mockBarrasDeControl = {
    tiempoVidaUtil: -1,
} as any;

export const mockEstadoReactorEncendido = {
    generarEnergia: jest.fn(),
} as any;
  

