import { Planta } from './planta';

describe('Planta', () => {
  it('should create an instance', () => {
    expect(new Planta(7,"rosa", "rosus florus", "Interior", 140, "Templado, calido","Tierra organica")).toBeTruthy();
  });
});
