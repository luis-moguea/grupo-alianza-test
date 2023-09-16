export const fakeData = {
    positions: Array.from({ length: 50 }, (_, index) => ({
      name: `Empleado ${index + 1}`,
      id: `ID${index + 1}`,
      area: `Área ${index % 5}`,
      position: `Posición ${index % 10}`,
      role: `Rol ${index % 3}`,
      boss: `Jefe ${index % 20}`,
    })),
    employs: Array.from({ length: 50 }, (_, index) => ({
      name: `Empleado ${index + 1}`,
      id: `ID${index + 1}`,
      address: `Dirección ${index % 30}`,
      phone: `555-123-${index.toString().padStart(2, '0')}`,
      city: `Ciudad ${index % 5}`,
      state: `Estado ${index % 3}`,
    })),
  };